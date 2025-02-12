const Addbtn = document.querySelector("#btn");
const listContainer = document.querySelector(".list-container");
const searchBar = document.querySelector("input");
const ul = document.querySelector("ul");

searchBar.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    Addbtn.click();
  }
});
Addbtn.addEventListener("click", (e) => {
  if (searchBar.value == "") {
    alert("Please Enter the task");
  } else {
    const li = document.createElement("li");
    li.innerHTML = `<button class='checked'>🔲</button>${searchBar.value}<button class='cut'>❌</button>`;
    ul.appendChild(li);
    saveData();
    searchBar.value = "";
  }
});

listContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("cut")) {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.classList.contains("checked")) {
    if (e.target.parentElement.style.textDecoration != "line-through") {
      e.target.parentElement.style.textDecoration = "line-through";
      e.target.innerHTML = "✅";
      saveData();
    } else {
      e.target.parentElement.style.textDecoration = "none";
      e.target.innerHTML = "🔲";
      saveData();
    }
  }
});
function saveData() {
  localStorage.setItem("data", ul.innerHTML);
}
function showData() {
  ul.innerHTML = localStorage.getItem("data");
}

showData();
