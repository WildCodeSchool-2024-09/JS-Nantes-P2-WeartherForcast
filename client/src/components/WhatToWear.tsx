import { useEffect, useState } from "react";

// Peut-etre on devrait mettre ces donnés dans un fichier contexte - j'imagine qu'on va tous les utiliser

// const weatherConditions = {
//   // Thunderstorm
//   200: "Thunderstorm with light rain",
//   201: "Thunderstorm with rain",
//   202: "Thunderstorm with heavy rain",
//   210: "Light thunderstorm",
//   211: "Thunderstorm",
//   212: "Heavy thunderstorm",
//   221: "Ragged thunderstorm",
//   230: "Thunderstorm with light drizzle",
//   231: "Thunderstorm with drizzle",
//   232: "Thunderstorm with heavy drizzle",

//   // Drizzle
//   300: "Light intensity drizzle",
//   301: "Drizzle",
//   302: "Heavy intensity drizzle",
//   310: "Light intensity drizzle rain",
//   311: "Drizzle rain",
//   312: "Heavy intensity drizzle rain",
//   313: "Shower rain and drizzle",
//   314: "Heavy shower rain and drizzle",
//   321: "Shower drizzle",

//   // Rain
//   500: "Light rain",
//   501: "Moderate rain",
//   502: "Heavy intensity rain",
//   503: "Very heavy rain",
//   504: "Extreme rain",
//   511: "Freezing rain",
//   520: "Light intensity shower rain",
//   521: "Shower rain",
//   522: "Heavy intensity shower rain",
//   531: "Ragged shower rain",

//   // Snow
//   600: "Light snow",
//   601: "Snow",
//   602: "Heavy snow",
//   611: "Sleet",
//   612: "Light shower sleet",
//   613: "Shower sleet",
//   615: "Light rain and snow",
//   616: "Rain and snow",
//   620: "Light shower snow",
//   621: "Shower snow",
//   622: "Heavy shower snow",

//   // Atmosphere
//   701: "Mist",
//   711: "Smoke",
//   721: "Haze",
//   731: "Sand/dust whirls",
//   741: "Fog",
//   751: "Sand",
//   761: "Dust",
//   762: "Ash",
//   771: "Squalls",
//   781: "Tornado",

//   // Clear
//   800: "Clear sky",

//   // Clouds
//   801: "Few clouds: 11-25%",
//   802: "Scattered clouds: 25-50%",
//   803: "Broken clouds: 51-84%",
//   804: "Overcast clouds: 85-100%",
// };

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
  const [conditID, setConditID] = useState();
  // const [city, setCity] = useState("Paris");
  const city = "Nantes";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=07310a0f69c5739447b27cfd4c17e3dd&units=metric`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // est-ce que je peux utiliser un 'map' ou 'spread' pour automatiser ce genre de code?
        setConditions(data.weather[0].description);
        setFeelsLike(data.main.feels_like);
        setTempMin(data.main.temp_min);
        setTempMax(data.main.temp_max);
        setHumidity(data.main.humidity);
        setWind(data.wind.speed);
        setClouds(data.clouds.all);
        setRain(data.pop);
        setConditID(data.weather[0].id);
      })
      .catch((err) => console.error(err));
  });
  // function defineClothingTemp() {
  //   let currentCondit: string;
  //   if (conditID.charAt(0) === 2) {
  //     currentCondit = "thunderstorm";
  //   } else {
  //     return "other weather type";
  //   }
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
      <p>CID: {conditID}</p>
    </div>
  );
}

export default WhatToWear;
