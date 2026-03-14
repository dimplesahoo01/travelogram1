const apiKey = "dd86324b8227b9730a7bf0985b24334e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json(); // Moved inside the function

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images2/clouds.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images2/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images2/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images2/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images2/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// Optional: default city
checkWeather(city);
