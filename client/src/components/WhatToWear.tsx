import { useEffect, useState } from "react";
import weatherConditions from "../assets/APIWeatherConditions";
import "../WhatToWear.css";
import tempRanges from "../assets/Temps";

function WhatToWear() {
  // DECLARATION OF VARIABLES -- Est-ce qu'on devrait stocker ces variables dans un context pour qu'ils soient dispo pour tout les componenets ?
  const [conditions, setConditions] = useState();
  const [feelsLike, setFeelsLike] = useState();
  const [tempMin, setTempMin] = useState();
  const [tempMax, setTempMax] = useState(20);
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [clouds, setClouds] = useState();
  const [rain, setRain] = useState(0);
  const [conditID, setConditID] = useState(615);
  // const [city, setCity] = useState("Paris");
  const city = "Nesselwang";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=07310a0f69c5739447b27cfd4c17e3dd&units=metric`;
  const [tempRange, setTempRange] = useState("cool");

  // FETCH API
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
  }, [url]);

  // DECLARATION OF TYPES
  interface WeatherConditionImagesProps {
    [id: number]: string[];
  }
  // REORDER EXTERNAL ARRAY AND DEFINE IMAGE URLS TO DISPLAY - WEATHER CONDITIONS
  const weatherConditionImages: WeatherConditionImagesProps = {};

  for (const condition of weatherConditions) {
    for (const id of condition.id) {
      weatherConditionImages[id] = condition.imgSrc;
    }
  }
  //  FIND TEMERATURE RANGE (ie: warm, very warm, cool, etc.)
  function findTemperatureRange(tempIn: number) {
    for (const range of tempRanges) {
      tempIn >= range.start && tempIn <= range.end
        ? setTempRange(range.temp)
        : setTempRange("Who knows?");
    }
  }
  findTemperatureRange(tempMax);

  // above - maybe use variables ? tempRangeVar = range.temp :
  // tempRangeVar = "Who knows?")

  // SET URLS TO VARIABLES
  const imageUrls = weatherConditionImages[conditID];
  const imageUrl1 = imageUrls && imageUrls.length > 0 ? imageUrls[0] : "";
  const imageUrl2 = imageUrls && imageUrls.length > 0 ? imageUrls[1] : "";
  const imageUrl3 = imageUrls && imageUrls.length > 0 ? imageUrls[2] : "";
  const imageUrl4 = imageUrls && imageUrls.length > 0 ? imageUrls[3] : "";

  // DISPLAY ELEMENTS
  return (
    // TEST DISPLAY OF API DATA
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
      <p>Temp Range {tempRange}</p>

      {/* DISPLAY OF CLOTHING RECOMMENDATIONS DEPENDING ON WEATHER CONDITIONS */}
      <img
        src={imageUrl1}
        alt="Weather Condition"
        className={imageUrl1 ? "active" : "hide"}
      />
      <img
        src={imageUrl2}
        alt="Weather Condition"
        className={imageUrl2 ? "active" : "hide"}
      />
      <img
        src={imageUrl3}
        alt="Weather Condition"
        className={imageUrl3 ? "active" : "hide"}
      />
      <img
        src={imageUrl4}
        alt="Weather Condition"
        className={imageUrl4 ? "active" : "hide"}
      />
    </div>
  );
}

export default WhatToWear;
