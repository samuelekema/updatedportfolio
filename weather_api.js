const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function(){
  //error when input is empty
const errorMsg = document.querySelector(".error-msg");
const inputBox = document.getElementById("location-input");
if(inputBox.value == ""){
  errorMsg.style.display = "inline-block";
} else {
  errorMsg.style.display = "none";
  updateTime();
  setInterval(updateTime, 1000);
}



//Display Date and time


function updateTime(){
  const timeEl = document.getElementById("time");
  const date = new Date();
  
  let hour = date.getHours();
  let mins = date.getMinutes();
  let sec = date.getSeconds()
  
  let currentTime = `${hour}Hr:${mins}Mins:${sec}Sec`;
  timeEl.innerHTML = `<p>${currentTime}</p>`
}




 //api fetch data 
  const apiKey = '75dc8ad9a30bc84f4f440836293f4c13'; // Replace with your actual OpenWeatherMap API key
  const zipcode = document.getElementById("location-input").value; // Replace with the desired city
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${apiKey}`;
  // Fetch weather data
   async function getData(){
      await fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Handle the weather data
        console.log(data);

        //convert kelvin to fahrenheit
        const getKelvin = data.main.temp
        const fahrenheitConvert = (getKelvin - 273.15) * 9/5 + 32;
        const fahrenheit = Math.round(fahrenheitConvert);
        const getIcon = data.weather[0].icon;
        const iconurl = `https://openweathermap.org/img/wn/${getIcon}@2x.png`;
        const cityName = document.getElementById("location-data");
        const temperatureData = document.getElementById("temp-data");
        const windData = document.getElementById("wind-data");
        const humidityData = document.getElementById("humidity-data");
        const visibilityData = document.getElementById("visibility-data");
        const iconData = document.getElementById("icon-data");
        const uvData = document.getElementById("uv-index-data");
        const countryData = document.getElementById("country-data");


        iconData.src = iconurl;
        cityName.innerHTML = `<h1>${data.name}</h1>`;
        countryData.innerHTML = `<p>${data.sys.country}</p>`;
        visibilityData.innerHTML = `<p>${data.visibility}</p>`;
        humidityData.innerHTML = `<p>${data.main.humidity}%</p>`;
        windData.innerHTML = `<p>${data.wind.speed}km/h</p>`;
        temperatureData.innerHTML = `<h1>${fahrenheit}<sup>o</sup>F</h1>`;
        uvData.innerHTML = `<p>${data.weather[0].description}</p>`;

      })

      .catch(error => {
        // Handle errors
        console.error('Error fetching weather data:', error);
    });
  }
  getData();
})
