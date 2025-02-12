let search_bar = document.querySelector("input");
let city = document.getElementById("city1");
let Temprature = document.querySelector("#temp");
let wind = document.querySelector("#wind-main");
let humidity = document.querySelector("#humi-main");
const button = document.querySelector("button");
let weatherImg = document.querySelector(".weather > img:nth-child(1)");
const info = document.querySelector(".info");

search_bar.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
  
    
    button.click();
  }
});

button.addEventListener("click", (e) => {
  
  let cityName = search_bar.value;
  const apiKey = ""; 
  let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  fetch(apiurl)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      wind.innerText = data.wind.speed + "km/h";

      humidity.innerText = data.main.humidity + "%";
      Temprature.innerText = Math.round(data.main.temp) + "°C";

      if (data.weather[0].main == "Clear") {
        weatherImg.src = "images/clear.png";
      }
      if (data.weather[0].main == "Clouds") {
        weatherImg.src = "images/clouds.png";
      }
      if (data.weather[0].main == "Drizzle") {
        weatherImg.src = "images/drizzle.png";
      }
      if (data.weather[0].main == "Mist") {
        weatherImg.src = "images/mist.png";
      }
      if (data.weather[0].main == "Rain") {
        weatherImg.src = "images/rain.png";
      }
      if (data.weather[0].main == "Snow") {
        weatherImg.src = "images/snow.png";
      }

      search_bar.value = "";
    })

    .catch((error) => console.error("Error fetching data:", error));
});
