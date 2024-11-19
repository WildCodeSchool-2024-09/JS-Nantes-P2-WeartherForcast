import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import emptyHeart from "../assets/icons/emptyheart.png";
import "../style/Today.css";
import PrecipitationForecast from "../components/PrecipitationForcast";

interface WeatherData {
  skyState: string | undefined;
  temperature: number | undefined;
  realFeel: number | undefined;
  cityName: string;
}

interface OutletContextProps {
  city: string;
  setCity: (value: string) => void;
}

function Today() {
  // Utilise useOutletContext pour obtenir city depuis outletContext
  const outletContext = useOutletContext<OutletContextProps>();
  const [skyState, setSkyState] = useState<WeatherData["skyState"]>(undefined);
  const [temperature, setTemperature] =
    useState<WeatherData["temperature"]>(undefined);
  const [realFeel, setRealFeel] = useState<WeatherData["realFeel"]>(undefined);
  const [cityName, setCityName] = useState<string>("");

  useEffect(() => {
    // Crée l'URL de l'API avec la ville dynamique
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${outletContext.city}&appid=4e41f328e6b4fcf670b66844921c47d8&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log("C'est quoi la data ?? ", data);
        setCityName(data.name); // Met à jour cityName avec la ville récupérée
        setSkyState(data.weather[0].icon);
        setTemperature(Math.round(data.main.temp));
        setRealFeel(Math.round(data.main.feels_like));
      })
      .catch((err) => console.error(err));
  }, [outletContext]); // Re-fetch à chaque changement de ville

  const today = new Date();
  const dateOfToday = today.toLocaleDateString("fr-FR");

  return (
    <section className="today-comp">
      <div className="circle-container">
        <svg className="circle-1" height="30rem" width="30rem">
          <title>animationCircles</title>
          <defs>
            <linearGradient id="MyGradient">
              <stop offset="30.2%" stopColor="#572a6d" />
              <stop offset="49.7%" stopColor="#e67226" />
              <stop offset="57.1%" stopColor="#ecc36d" />
              <stop offset="67.4%" stopColor="#6bb3d6" />
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
          <h2 className="your-city">{cityName}</h2>{" "}
          {/* Affiche cityName ou city */}
          <div className="state-temp">
            <figcaption>
              <img
                src={`http://openweathermap.org/img/wn/${skyState}@2x.png`}
                alt="Etat du ciel"
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
      <PrecipitationForecast />
    </section>
  );
}

export default Today;
