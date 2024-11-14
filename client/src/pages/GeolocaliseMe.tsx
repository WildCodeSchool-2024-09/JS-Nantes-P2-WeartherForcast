import { useOutletContext } from "react-router-dom";
import "/src/style/animationCircle.css";
import { useEffect, useState } from "react";
import type { CityOutletContextType } from "../App";

export default function GeolocaliseMe() {
  const outletContext = useOutletContext<CityOutletContextType>();
  const [cityInfoMeteo, setCityInfoMeteo] = useState<{
    city?: string;
    cityId?: string;
    currentTemp?: string;
    tempDescription?: string;
  }>({
    city: undefined,
    cityId: undefined,
    currentTemp: undefined,
    tempDescription: undefined,
  }); //undefind parce qu"il est nul au depart

  useEffect(() => {
    if (outletContext.city) {
      const urlforCity: string = `https://api.openweathermap.org/data/2.5/weather?q=${outletContext.city}&appid=075e3c803b57e9d25a7e50c00e33a2ff&units=metric`;
      recoverCityInfoMeteo(urlforCity);
    }
  }, [outletContext]);

  async function recoverCityInfoMeteo(url: string) {
    if (url) {
      try {
        const request = await fetch(url);
        const datas = await request.json();
        setCityInfoMeteo((currentState) => ({
          ...currentState,
          city: `${datas.name}`,
          cityId: `${datas.id}`,
          currentTemp: `${datas.main.temp}`,
          tempDescription: `${datas.weather[0].main}`,
        })); //currentState au cas ou on oublie de passer une valeur ou si la donnee est caduque, il y aura toujours l,ancienne valeur qui s'affichera
      } catch (error) {
        alert("Sorry, we met a problem. Please, come back later.");
      }
    }
  }
  return (
    <section className="circleContainer">
      <svg className="circle-1" height="30rem" width="30rem">
        <title>animated circle</title>
        <defs>
          <linearGradient id="MyGradient">
            <stop offset="30.2%" stopColor="#572a6d" />
            <stop offset="49.7%" stopColor="#e67226" />
            <stop offset="57.1%" stopColor="#ecc36d " />
            <stop offset="67.4%" stopColor="#6bb3d6 " />
          </linearGradient>
        </defs>
        <circle
          className="circle1__Stroke animationCircles"
          stroke="url(#MyGradient)"
          strokeWidth="15px"
          strokeLinecap="round"
          r="117px"
          cx="50%"
          cy="50%"
          fill="transparent"
        />
      </svg>
      <div className="meteo-info-wrapper">
        <h2>{cityInfoMeteo.city}</h2>
        <div>
          <img src="" alt="" />
          <p>{cityInfoMeteo.currentTemp}°C</p>
        </div>
        <p>Real feel</p>
        <p>date</p>
      </div>
    </section>
  );
}
