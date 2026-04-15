function changeWeather(response){

    let currentWeather = document.querySelector("#current-temperature");
    let temperature = response.data.temperature.current;
    currentWeather.innerHTML = Math.round(temperature);

    

    let weatherCondition = document.querySelector("#weather-description");
    weatherCondition.innerHTML = response.data.condition.description;

    let temperatureHumidity =  document.querySelector("#humidity");
    let humidity = response.data.temperature.humidity;
    temperatureHumidity.innerHTML = `${humidity}%`;

    let windSpeed = document.querySelector("#wind-speed");
    let speedWind = response.data.wind.speed;
    windSpeed.innerHTML = `${speedWind} m/s`;

    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;

    let dayTime = document.querySelector("#day-time");
    let date = new Date(response.data.time * 1000);
    dayTime.innerHTML = currentDate(date);


    let iconElement = document.querySelector("#icon");
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather.icon"/>`;

    getForecast(response.data.city);
}

function currentDate(date){

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    

    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = days[date.getDay()];

    if(minutes <10){
        minutes = `0${minutes}`;
    }

    if(hours <10){
        hours = `0${hours}`;
    }
   
    return `${day} ${hours}:${minutes}`;
}


function searchCity(city){

     let apiKey = "49a8a63t5f3e45e0f637cbabo60c59fa";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
   axios.get(apiUrl).then(changeWeather);
}

function searchFormSubmit(event){
    event.preventDefault();
    let searchEngen = document.querySelector("#search-engen");
    
   searchCity(searchEngen.value);
}

function getForecast(city){
    let apiKey = "49a8a63t5f3e45e0f637cbabo60c59fa";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayForecast);
}

function displayForecast(){
    let forecastElement = document.querySelector("#forecast-weather");
    let days = ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let forecastHTML = "";

    days.forEach(function  (day)  {
        forecastHTML = 
            forecastHTML + 
            `<div class="weather-forecast">
                <div class="forecast-day">${day}</div>
                <div class="forecast-icon">🌧</div>
                <div class="forecast-temperature">
                    <div class="temperature"><strong>17°C</strong></div> 
                    <div class="temperature">3°C</div>
                </div>
            </div>`;
});

forecastElement.innerHTML = forecastHTML;
}


let searchForm=document.querySelector("#form-element");
searchForm.addEventListener("submit", searchFormSubmit);

searchCity("Johannesburg");





