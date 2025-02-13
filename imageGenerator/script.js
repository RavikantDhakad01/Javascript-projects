const searchBar = document.getElementById("input");
const searchBtn = document.getElementById("searchBtn");
const showMore = document.getElementById("moreBtn");
const images = document.querySelector(".images");
const apiKey = "";
let page = 1;

function searchImages(newSearch) {
  if (newSearch) {
    images.innerHTML = "";
    page = 1;
    if (searchBar.value == "") {
      alert(" Please type something here");
    }
  }
  let keyword = searchBar.value.trim();
  const apiUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}&per_page=12`;

  if (searchBar.value != ""){
    fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const results = data.results;
      results.forEach((item) => {
        const image = document.createElement("img");
        image.src = `${item.urls.small}`;
        const imageLink = document.createElement("a");

        imageLink.href = `${item.links.html}`;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        images.appendChild(imageLink);
      });

      showMore.style.display = "block";
    })
    .catch((Error) => {
      console.error("Error fetching data:", Error);
    });
  }

}
searchBar.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    searchBtn.click();
  }
});

searchBtn.addEventListener("click", (e) => {
  searchImages(true);
});
showMore.addEventListener("click", (e) => {
  page++;
  searchImages(false);
});
