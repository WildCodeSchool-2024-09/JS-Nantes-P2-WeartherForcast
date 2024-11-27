import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import PrecipitationForecast from "../components/PrecipitationForcast";
import WhatToWear from "../components/WhatToWear";
import type CityOutletContextType from "../types/Outletcontext";
import "../style/Today.css";
import emptyHeart from "../assets/icons/emptyheart.png";
import whiteHeart from "../assets/icons/white-heart.png";
import type { NewCity } from "../types/newFavoriteCity";
import type OutletContextProps from "../types/preferencesWear";
import {
  getBackground,
  getColorCircle,
} from "../utilitiesFunctions/getBackground.tsx";

function Today() {
  // GETTER OUTLET CONTEXT
  const outletContext = useOutletContext<CityOutletContextType>();

  // FAV
  const citiesUserInLocalStorage = localStorage.getItem("savedCities");
  const savedCities = citiesUserInLocalStorage
    ? (JSON.parse(citiesUserInLocalStorage as string) as NewCity[])
    : [];
  const [favorites, setFavorites] = useState(savedCities);

  useEffect(() => {
    if (favorites) {
      localStorage.setItem("savedCities", JSON.stringify(favorites));
    }
  }, [favorites]);

  const handleClick = (id: string, name: string) => {
    //Quans on clique sur le coeur
    if (
      !favorites.some((city) => {
        //.some  est une methode JS si un element du tableau repond a une condition, some return tru or false. Ici,  le ! permet de verifier si une ville est absente des favoris, donc non liked.
        return city.cityId === id; //En gros on verifie que lq ville n'est pqs dejq dqns les fqvoris
      })
    ) {
      setFavorites((currentFavorites) => [
        //Si la ville n'est pas dans les favoris, si l"utilisateur clique sur le coeur c"est parce qu"il veut l"ajouter a ses favoris. Donc on met a jour les fav en creant un nouveau tableau, ...currentFavorites pour copier les elements deja present et on ajoute la nouvelle ville au fav.
        ...currentFavorites, //le spread ici -> notion d"immutabilite en React, c'est a dire qu'il est plus sur de cree des nouvelles copies avec les nouvelles modifiees plutot que de modifier direct les donnees d"un state.
        { cityName: name, cityId: id },
      ]);
      //currentFavorites pour lui dire de regarder d"abord le contenu courant de favorites et de le modifier avant de faire la suite. Ca garantie qu"on prenne bien la valeur telle auelle est au momemt ou on demande l"operation
      //📖 DOC : https://react.dev/reference/react/useState -> "I’ve updated the state, but the screen doesn’t update" AND "My initializer or updater function runs twice"
    } else {
      setFavorites(
        (
          currentFavorites, //Si la ville est deja dans les fav donc liked, si l'utilisateur clique dessus c'est parce qu'il souhaite l"enlever de ses favoris. Donc on recopie la liste des fav mais sans cette derniere , et ca la supprime.
        ) =>
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
  const [conditions, setConditions] = useState<string>("description");
  const [tempMax, setTempMax] = useState("");
  const [conditID, setConditID] = useState(615);
  const { setWindDirection, setWind, setNewHumidity } =
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
          outletContext.setIdCity(data.id); // ℹ️ For the favorites gestion
          if (data.weather[0].main) {
            // ℹ️ For the background dynamic
            getBackground(data.weather[0].main, outletContext.setBackground);
            getColorCircle(data.weather[0].main, outletContext.setColorCircle);
          }
          setConditions(data.weather[0].description);
          setTempMax(data.main.temp_max);
          setConditID(data.weather[0].id);
          setWind(data.wind.speed);
          setWindDirection(data.wind.deg);
          setNewHumidity(data.main.humidity);
        })
        .catch((err) => console.error(err));
    }
  }, [
    outletContext.city,
    outletContext.setBackground,
    outletContext.setIdCity,
    setNewHumidity,
    setWindDirection,
    setWind,
    outletContext.setColorCircle,
  ]);

  //SET THE DATE
  const today = new Date();
  const dateOfToday = today.toLocaleDateString("fr-FR");

  return (
    <>
      <section className="today-comp animated-section">
        <div className="circle-container">
          <svg className="circle-1" height="20rem" width="30rem">
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
              background: outletContext.colorCircle,
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
                    // 💡 SOME = is there one ? true : false
                    return cities.cityId === outletContext.idCity; //Donc on verifie si la city courrante est dans les favoris, si c'est vrai, on affiche le coeur rempli, si non, le coeur vide.
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
      <WhatToWear
        conditID={conditID}
        conditions={conditions}
        tempMax={tempMax}
      />
    </>
  );
}
export default Today;
