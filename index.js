function changeWeather(response){
    let currentWeather = document.querySelector("#current-temperature");
    let temperature = response.data.temperature.current;
    currentWeather.innerHTML = Math.round(temperature);


    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    
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


let searchForm=document.querySelector("#form-element");
searchForm.addEventListener("submit", searchFormSubmit);

searchCity("Johannesburg");
