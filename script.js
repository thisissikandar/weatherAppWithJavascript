const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "01eca33c8bmsh8e20f2a108eb43bp1c8e69jsn1d38a2527c43",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather= (city)=>{
	cityName.innerHTML = city
fetch(
  `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    temp.innerHTML = response.temp;
    temp2.innerHTML = response.temp;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    feels_like.innerHTML = response.feels_like;
    // cloud_pct.innerHTML = response.cloud_pct;
    humidity.innerHTML = response.humidity;
    humidity2.innerHTML = response.humidity;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML = response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather('Delhi')