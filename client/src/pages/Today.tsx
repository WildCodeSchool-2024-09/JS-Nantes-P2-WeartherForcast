import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import emptyHeart from "../assets/icons/emptyheart.png";
import PrecipitationForecast from "../components/PrecipitationForcast";
import WhatToWear from "../components/WhatToWear";
import type CityOutletContextType from "../types/Outletcontext";
import "../style/Today.css";
import type OutletContextProps from "../types/preferencesWear";

function Today() {
  const outletContext = useOutletContext<CityOutletContextType>();
  const [skyState, setSkyState] = useState("");
  const [temperature, setTemperature] = useState<number>();
  const [realFeel, setRealFeel] = useState<number>();
  const [conditions, setConditions] = useState<string>("descritpion");
  const [tempMax, setTempMax] = useState("");
  const [conditID, setConditID] = useState(615);
  const { wind, setWind } = useOutletContext<OutletContextProps>();
  const { windDirection, setWindDirection } =
    useOutletContext<OutletContextProps>();
  const { newHumidity, setNewHumidity } =
    useOutletContext<OutletContextProps>();

  useEffect(() => {
    if (outletContext.city) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${outletContext.city}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setSkyState(data.weather[0].icon);
          setTemperature(Math.round(data.main.temp));
          setRealFeel(Math.round(data.main.feels_like));
          setConditions(data.weather[0].description);
          setTempMax(data.main.temp_max);
          setConditID(data.weather[0].id);
          setWind(data.wind.speed);
          setWindDirection(data.wind.deg);
          setNewHumidity(data.main.humidity);
        })
        .catch((err) => console.error(err));
    }
  }, [outletContext, setNewHumidity, setWindDirection, setWind]);
  const today = new Date();
  const dateOfToday = today.toLocaleDateString("fr-FR");
  console.warn("wind:", wind);
  console.warn("windDirection:", windDirection);
  console.warn("newHumidity", newHumidity);

  return (
    <>
      <section className="today-comp animated-section">
        <div className="circle-container">
          <svg className="circle-1" height="30rem" width="30rem">
            <title>animationCircles</title>
            <defs>
              <linearGradient id="my-gradient">
                <stop offset="30.2%" stopColor="#572a6d" />
                <stop offset="49.7%" stopColor="#e67226" />
                <stop offset="57.1%" stopColor="#ecc36d" />
                <stop offset="67.4%" stopColor="#6bb3d6" />
              </linearGradient>
            </defs>
            <circle
              className="circle1-stroke animation-circles"
              stroke="url(#my-gradient)"
              strokeWidth="15px"
              strokeLinecap="round"
              r="130px"
              cx="50%"
              cy="50%"
              fill="transparent"
            />
          </svg>
          <div className="cadran-content">
            <h2 className="your-city">{outletContext.city}</h2>
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
      <PrecipitationForecast />
      <WhatToWear
        conditID={conditID}
        conditions={conditions}
        tempMax={tempMax}
      />
    </>
  );
}
export default Today;
