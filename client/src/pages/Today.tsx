import { useEffect, useState } from "react";
import emptyHeart from "../assets/icons/emptyheart.png";
import "../style/Today.css";
import WhatToWear from "../components/WhatToWear";

interface WeatherData {
  skyState: string | undefined;
  temperature: number | undefined;
  realFeel: number | undefined;
}

function Today() {
  const city = "Nantes";
  const [skyState, setSkyState] = useState<WeatherData["skyState"]>(undefined);
  const [temperature, setTemperature] =
    useState<WeatherData["temperature"]>(undefined);
  const [realFeel, setRealFeel] = useState<WeatherData["realFeel"]>(undefined);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4e41f328e6b4fcf670b66844921c47d8&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSkyState(data.weather[0].icon);
        setTemperature(Math.round(data.main.temp));
        setRealFeel(Math.round(data.main.feels_like));
      })
      .catch((err) => console.error(err));
  }, []);

  const today = new Date();
  const dateOfToday = today.toLocaleDateString("fr-FR");

  return (
    <>
      <section className="today-comp">
        <div className="circle-container">
          <svg className="circle-1" height="30rem" width="30rem">
            <title>animationCircles</title>
            <defs>
              <linearGradient id="MyGradient">
                <stop offset="30.2%" stop-color="#572a6d" />
                <stop offset="49.7%" stop-color="#e67226" />
                <stop offset="57.1%" stop-color="#ecc36d" />
                <stop offset="67.4%" stop-color="#6bb3d6" />
              </linearGradient>
            </defs>
            <circle
              className="circle1-stroke animation-circles"
              stroke="url(#MyGradient)"
              strokeWidth="15px"
              strokeLinecap="round"
              r="130px"
              cx="50%"
              cy="50%"
              fill="transparent"
            />
          </svg>
          <div className="cadran-content">
            <h2 className="your-city">{city}</h2>
            <div className="state-temp">
              <figcaption>
                <img
                  src={`http://openweathermap.org/img/wn/${skyState}@2x.png`}
                  alt="symbole de l'état du ciel"
                />
              </figcaption>
              <h3 className="temperature">{temperature}°</h3>
            </div>
            <div className="real-feel">Feel like : {realFeel}°</div>
            <div className="date">{dateOfToday}</div>
            <button type="button" className="fav-button">
              <img className="fav-icon" src={emptyHeart} alt="<3" />
            </button>
          </div>
        </div>
      </section>
      <WhatToWear />
    </>
  );
}
export default Today;
