import { useEffect, useState } from "react";
import emptyHeart from "../assets/icons/emptyheart.png";
import "../style/Today.css";

function Today() {
  const city = "Moscou";
  const [skyState, setSkyState] = useState();
  const [temperature, setTemperature] = useState();
  const [realFeel, setRealFeel] = useState();

  // Appel API pour récupérer la météo
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

  // Formater la date actuelle
  const today = new Date();
  // const options = { weekday: "long", day: "numeric", month: "long" };
  const dateOfToday = today.toLocaleDateString("fr-FR");

  return (
    <div className="cadranContainer">
      <div className="cadranContent">
        <h2 className="youCity">{city}</h2>
        <div className="stateTemp">
          <figcaption>
            <img
              src={`http://openweathermap.org/img/wn/${skyState}@2x.png`}
              alt="symbole de l'état du ciel"
            />
          </figcaption>
          <h3 className="temperature">{temperature}°</h3>
        </div>
        <div className="realFeel">Feel like : {realFeel}°</div>
        <div className="date">{dateOfToday}</div>
        <button type="button" className="favButton">
          <img className="favIcon" src={emptyHeart} alt="<3" />
        </button>
      </div>
    </div>
  );
}

export default Today;
