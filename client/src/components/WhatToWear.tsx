import { useState } from "react";

function WhatToWear() {
  // Est-ce qu'on devrait stocker ces variables dans un context pour qu'ils soient dispo pour tout les componenets si besoin ?
  const [conditions, setConditions] = useState();
  const [feelsLike, setFeelsLike] = useState();
  const [tempMin, setTempMin] = useState();
  const [tempMax, setTempMax] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [clouds, setClouds] = useState();
  const [rain, setRain] = useState(0);
  // const [city, setCity] = useState("Paris");
  const city = "Sydney";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=07310a0f69c5739447b27cfd4c17e3dd&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // est-ce que je peux utiliser un 'map' ou 'spread' pour automatiser ce genre de function?
      setConditions(data.weather[0].icon);
      setFeelsLike(data.main.feels_like);
      setTempMin(data.main.temp_min);
      setTempMax(data.main.temp_max);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setClouds(data.clouds.all);
      setRain(data.pop);
    })
    .catch((err) => console.error(err));
  return (
    <div>
      <h1>{city}</h1>
      <p>Conditions: {conditions}</p>
      <p>Real feel: {feelsLike}</p>
      <p>Min: {tempMin}</p>
      <p>Max: {tempMax}</p>
      <p>Humidity: {humidity}</p>
      <p>Wind: {wind}</p>
      <p>Clouds: {clouds}</p>
      <p>Probability of Rain {rain}</p>
    </div>
  );
}

export default WhatToWear;
