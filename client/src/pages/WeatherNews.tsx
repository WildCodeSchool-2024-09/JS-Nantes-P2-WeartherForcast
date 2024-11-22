import "/src/style/weathernews.css";
import { useState } from "react";
import arrow from "/src/assets/icons/arrow3.png";
import { weatherNewsData } from "../WeatherNewsData.tsx";

function WeatherNews() {
  const [cityIndex, setCityIndex] = useState(0);
  const handleClickInc = () => {
    setCityIndex(cityIndex + 1);
  };
  const handleClickDec = () => {
    setCityIndex(cityIndex - 1);
  };

  return (
    <section className="element">
      <div className="header">
        <div className="title">
          <h2>News</h2>
        </div>
      </div>

      <div className="carousel-container">
        {cityIndex > 0 ? (
          <button className="arrow" type="button" onClick={handleClickDec}>
            <img
              className="left-arrow"
              src={arrow}
              alt="right arrow previous button "
            />
          </button>
        ) : (
          <button className="arrow" type="button">
            <img
              className="left-arrow"
              src={arrow}
              alt="right arrow previous button "
            />
          </button>
        )}

        <iframe
          className="news"
          title="something"
          src={weatherNewsData[cityIndex].src}
          width="350"
          height="550"
        />

        {cityIndex < 4 ? (
          <button className="arrow" type="button" onClick={handleClickInc}>
            <img
              className="right-arrow"
              src={arrow}
              alt="right arrow next button "
            />
          </button>
        ) : (
          <button className="arrow" type="button">
            <img
              className="right-arrow"
              src={arrow}
              alt="left arrow previous button "
            />
          </button>
        )}

        <div className="to-site">
          <a
            href={weatherNewsData[cityIndex].src}
            className="link, button-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lien vers l'article
          </a>
        </div>
      </div>
    </section>
  );
}

export default WeatherNews;
