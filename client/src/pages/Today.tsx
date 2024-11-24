import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import PrecipitationForecast from "../components/PrecipitationForcast";
import WhatToWear from "../components/WhatToWear";
import type CityOutletContextType from "../types/Outletcontext";
import "../style/Today.css";
import emptyHeart from "../assets/icons/emptyheart.png";
import whiteHeart from "../assets/icons/white-heart.png";
import { getBackground } from "../utilitiesFunctions/getBackground.tsx";

type NewCity = {
  cityId: string;
  cityName: string;
};

function Today() {
  // GETTER OUTLET CONTEXT
  const outletContext = useOutletContext<CityOutletContextType>();

  // FAV
  // const [isFav, setFav] = useState(false);
  const citiesUserInLS = localStorage.getItem("savedCities");
  const savedCities = citiesUserInLS
    ? (JSON.parse(citiesUserInLS as string) as NewCity[])
    : [];
  const [favorites, setFavorites] = useState(savedCities);

  useEffect(() => {
    if (favorites) {
      localStorage.setItem("savedCities", JSON.stringify(favorites));
    }
  }, [favorites]);

  const handleClick = (id: string, name: string) => {
    if (
      !favorites.some((city) => {
        return city.cityId === id;
      })
    ) {
      setFavorites((currentFavorites) => [
        ...currentFavorites,
        { cityName: name, cityId: id },
      ]);
      //currentFavorites pour lui dire de regarder d"abord le contenu courant de favorites et de le modifier avant de faire la suite. Ca garantie qu"on prenne bien la valeur telle auelle est au ;o;emt ou on de;ande l"operation DAC A AJOUTER
    } else {
      setFavorites((currentFavorites) =>
        currentFavorites.filter((city) => {
          return city.cityId !== id;
        }),
      );
    }
  };

  // CALL API AND DATA STATES
  const [skyState, setSkyState] = useState("");
  const [temperature, setTemperature] = useState<number>();
  const [realFeel, setRealFeel] = useState<number>();
  const [description, setDescription] = useState("");
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (outletContext.city) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${outletContext.city}&appid=4e41f328e6b4fcf670b66844921c47d8&units=metric`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setSkyState(data.weather[0].icon);
          setTemperature(Math.round(data.main.temp));
          setRealFeel(Math.round(data.main.feels_like));
          setDescription(data.weather[0].main);
          if (description)
            getBackground(description, outletContext.setBackground);
        })
        .catch((err) => console.error(err));
    }
  }, [outletContext.city]);

  const today = new Date();
  const dateOfToday = today.toLocaleDateString("fr-FR");

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
          <div
            className="cadran-content"
            style={{
              backgroundColor: `${outletContext.colorCircle}`,
            }}
          >
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
            <button
              type="button"
              className="fav-button"
              onClick={() =>
                handleClick(outletContext.idCity, outletContext.city)
              }
            >
              <img
                className="fav-icon"
                src={
                  favorites.some((cities) => {
                    //SOME = is there one ? true : false
                    return cities.cityId === outletContext.idCity;
                  })
                    ? whiteHeart
                    : emptyHeart
                }
                alt=""
              />
            </button>
          </div>
        </div>
      </section>
      <PrecipitationForecast />
      <WhatToWear />
    </>
  );
}
export default Today;
