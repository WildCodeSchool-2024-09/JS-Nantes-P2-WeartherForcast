import "/src/style/weathernews.css";
import { useState } from "react";
import arrow from "/src/assets/icons/arrow3.png";
import { weatherNewsData } from "../weatherNewsData.tsx";

function WeatherNews() {
  const [cityIndex, setCityIndex] = useState(0);
  const handleClickInc = () => {
    setCityIndex(cityIndex + 1);
  };
  const handleClickDec = () => {
    setCityIndex(cityIndex - 1);
  };

  return (
    <section>
      <div className="carrousselContainer">
        {cityIndex > 0 ? (
          <button type="button" onClick={handleClickDec}>
            <img
              className="left-arrow"
              src={arrow}
              alt="right arrow previous button "
            />
          </button>
        ) : (
          <button type="button">
            <img
              className="left-arrow"
              src={arrow}
              alt="right arrow previous button "
            />
          </button>
        )}

        <iframe
          title="something"
          src={weatherNewsData[cityIndex].src}
          width="350"
          height="550"
        />
        {cityIndex < 4 ? (
          <button type="button" onClick={handleClickInc}>
            <img
              className="right-arrow"
              src={arrow}
              alt="right arrow next button "
            />
          </button>
        ) : (
          <button type="button">
            <img
              className="right-arrow"
              src={arrow}
              alt="left arrow previous button "
            />
          </button>
        )}
      </div>
    </section>
  );
}
/* <div id="app">
        <iframe
          title="something"
          src="https://www.francetvinfo.fr/meteo/climat/inondations-en-espagne-les-intemperies-touchent-la-catalogne_6885560.html"
          width="290"
          height="350"
        />
      </div>
      <div id="city">
        <iframe
          title="something"
          src="https://www.lavenir.net/actu/societe/meteo/2024/11/08/meteo-en-belgique-ce-vendredi-une-grisaille-tenace-ce-vendredi-et-ce-week-end-6AOGJASX5JGMFFFOTACLEHPXKY/"
          width="290"
          height="350"
        />
      </div>
      <div id="news">
        <iframe
          title="something"
          src="https://la1ere.francetvinfo.fr/nouvellecaledonie/en-australie-des-phenomenes-meteorologiques-extremes-de-plus-en-plus-frequents-1533226.html"
          width="290"
          height="350"
        />
      </div>
      <div id="actuality">
        <iframe
          title="something"
          src="https://meteonews.fr/fr/News/N14317/Tendances-saisonni%C3%A8res-_-vers-un-hiver-2024-25-doux-ou-froid-%3F"
          width="290"
          height="350"
        />
      </div>
      <div id="Card">
        <iframe
          title="something"
          src="https://meteonews.fr/fr/News"
          width="290"
          height="350"
        />
      </div>
       */

/* https://www.francetvinfo.fr/meteo/climat/inondations-en-espagne-les-intemperies-touchent-la-catalogne_6885560.html */
/* https://www.lavenir.net/actu/societe/meteo/2024/11/08/meteo-en-belgique-ce-vendredi-une-grisaille-tenace-ce-vendredi-et-ce-week-end-6AOGJASX5JGMFFFOTACLEHPXKY/ */
/* https://la1ere.francetvinfo.fr/nouvellecaledonie/en-australie-des-phenomenes-meteorologiques-extremes-de-plus-en-plus-frequents-1533226.html */
/* https://meteonews.fr/fr/News/N14317/Tendances-saisonni%C3%A8res-_-vers-un-hiver-2024-25-doux-ou-froid-%3F */
/* https://meteonews.fr/fr/News */
export default WeatherNews;
