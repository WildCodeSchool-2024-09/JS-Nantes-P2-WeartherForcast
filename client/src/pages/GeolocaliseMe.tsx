import { useOutletContext } from "react-router-dom";
import "/src/style/geolocaliseMe.css";
import { useEffect, useState } from "react";
import type { CityOutletContextType } from "../App";
import emptyHeart from "../assets/icons/emptyheart.png";

export default function GeolocaliseMe() {
  const outletContext = useOutletContext<CityOutletContextType>();
  const [cityInfoMeteo, setCityInfoMeteo] = useState<{
    city?: string;
    cityId?: string;
    currentTemp?: string;
    tempDescription?: string;
    realFeel?: string;
  }>({
    city: undefined,
    cityId: undefined,
    currentTemp: undefined,
    tempDescription: undefined,
    realFeel: undefined,
  }); //undefind parce qu"il est nul au depart

  const today = new Date();
  const dateOfToday = today.toLocaleDateString("fr-FR");

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
          realFeel: `${datas.main.feels_like}`,
        })); //currentState au cas ou on oublie de passer une valeur ou si la donnee est caduque, il y aura toujours l,ancienne valeur qui s'affichera
      } catch (error) {
        alert("Sorry, we met a problem. Please, come back later.");
      }
    }
  }
  return (
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
          <h2 className="your-city">{cityInfoMeteo.city}</h2>
          <div className="state-temp">
            {/* <img src="" alt="" /> */}
            <h3 className="temperature">{cityInfoMeteo.currentTemp}°</h3>
          </div>
          <div className="real-feel">Feel like : {cityInfoMeteo.realFeel}°</div>
          <div className="date">{dateOfToday}</div>
          <button type="button" className="fav-button">
            <img className="fav-icon" src={emptyHeart} alt="<3" />
          </button>
        </div>
      </div>
    </section>
  );
}
