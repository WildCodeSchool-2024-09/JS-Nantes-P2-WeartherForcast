import { useOutletContext } from "react-router-dom";
import "/src/style/DayByDay.css";
import { useEffect, useState } from "react";
import type CityOutletContextType from "../types/Outletcontext";

function DayByday() {
  const outletContext = useOutletContext<CityOutletContextType>();

  const [skyState, setSkyState] = useState("");
  const [skyState1, setSkyState1] = useState("");
  const [skyState2, setSkyState2] = useState("");
  const [skyState3, setSkyState3] = useState("");
  const [skyState4, setSkyState4] = useState("");
  const [temperaturemin, setTemperatureMin] = useState<number>();
  const [temperaturemin1, setTemperatureMin1] = useState<number>();
  const [temperaturemin2, setTemperatureMin2] = useState<number>();
  const [temperaturemin3, setTemperatureMin3] = useState<number>();
  const [temperaturemin4, setTemperatureMin4] = useState<number>();
  const [temperature, setTemperature] = useState<number>();
  const [temperature1, setTemperature1] = useState<number>();
  const [temperature2, setTemperature2] = useState<number>();
  const [temperature3, setTemperature3] = useState<number>();
  const [temperature4, setTemperature4] = useState<number>();
  const [skyDate, setSkyDate] = useState("");
  const [skyDate1, setSkyDate1] = useState("");
  const [skyDate2, setSkyDate2] = useState("");
  const [skyDate3, setSkyDate3] = useState("");
  const [skyDate4, setSkyDate4] = useState("");

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${outletContext.city}&cnt1=1&appid=db33a6aa09eb95eb5bae868283feca9e&units=metric`,
    )
      .then((response) => response.json())
      .then((data) => {
        setSkyState(data.list[0].weather[0].icon);
        setSkyState1(data.list[16].weather[0].icon);
        setSkyState2(data.list[24].weather[0].icon);
        setSkyState3(data.list[32].weather[0].icon);
        setSkyState4(data.list[39].weather[0].icon);
        setTemperature(Math.round(data.list[8].main.temp_max));
        setTemperature1(Math.round(data.list[16].main.temp_max));
        setTemperature2(Math.round(data.list[24].main.temp_max));
        setTemperature3(Math.round(data.list[32].main.temp_max));
        setTemperature4(Math.round(data.list[32].main.temp_max));
        setTemperatureMin(Math.round(data.list[8].main.temp_min));
        setTemperatureMin1(Math.round(data.list[16].main.temp_min));
        setTemperatureMin2(Math.round(data.list[24].main.temp_min));
        setTemperatureMin3(Math.round(data.list[32].main.temp_min));
        setTemperatureMin4(Math.round(data.list[39].main.temp_min));
        setSkyDate(data.list[8].dt_txt);
        setSkyDate1(data.list[16].dt_txt);
        setSkyDate2(data.list[24].dt_txt);
        setSkyDate3(data.list[32].dt_txt);
        setSkyDate4(data.list[39].dt_txt);
      });
  }, [outletContext.city]);

  const calculateDimensions = (temperature: number, multiplier: number) => {
    const height = temperature * multiplier;
    return { height };
  };
  function getDayName(dateStr: string, locale: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  }

  getDayName(skyDate, "en-US");
  const dayName = getDayName(skyDate, "en-US");
  const firstLetter = Array.from(dayName)[0];
  const secondNumber = Array.from(skyDate)[8] + Array.from(skyDate)[9];
  const dayName1 = getDayName(skyDate1, "en-US");
  const firstLettre1 = Array.from(dayName1)[0];
  const secondNumber1 = Array.from(skyDate1)[8] + Array.from(skyDate1)[9];
  const dayName2 = getDayName(skyDate2, "en-US");
  const firstLettre2 = Array.from(dayName2)[0];
  const secondNumber2 = Array.from(skyDate2)[8] + Array.from(skyDate2)[9];
  const dayName3 = getDayName(skyDate3, "en-US");
  const firstLettre3 = Array.from(dayName3)[0];
  const secondNumber3 = Array.from(skyDate3)[8] + Array.from(skyDate3)[9];
  const dayName4 = getDayName(skyDate4, "en-US");
  const firstLettre4 = Array.from(dayName4)[0];
  const secondNumber4 = Array.from(skyDate4)[8] + Array.from(skyDate4)[9];

  return (
    <section className="animated-section day">
      <div className="container-rectangle">
        <div className="rectangle">
          <div className="day-and-label">
            <p>{firstLetter}</p>
          </div>
          <div className="day-and-label">
            <p>{secondNumber}</p>
          </div>
          <figcaption>
            <img
              className="icon-weather-day-by-day"
              src={`http://openweathermap.org/img/wn/${skyState}@2x.png`}
              alt="symbole de l'état du ciel"
            />
          </figcaption>

          <div className="temperature-max-dbd">
            <p>{temperature}°</p>
          </div>

          <section className="temps-min-and-rectangle">
            {temperature && (
              <div
                className="small-rectangle"
                style={{
                  height: calculateDimensions(temperature, 5).height,
                  backgroundColor: "white",
                }}
              />
            )}
          </section>
          <div className="temperature-min-dbd">
            <p>{temperaturemin}°</p>
          </div>
        </div>
      </div>
      <div className="rectangle">
        <div className="day-and-label">
          <p>{firstLettre1}</p>
        </div>
        <div className="day-and-label">
          <p>{secondNumber1}</p>
        </div>
        <figcaption>
          <img
            className="icon-weather-day-by-day"
            src={`http://openweathermap.org/img/wn/${skyState1}@2x.png`}
            alt="symbole de l'état du ciel"
          />
        </figcaption>
        <div className="temperature-max-dbd">
          <p>{temperature1}°</p>
        </div>
        <section className="temps-min-and-rectangle">
          {temperature1 && (
            <div
              className="small-rectangle"
              style={{
                height: calculateDimensions(temperature1, 5).height,
                backgroundColor: "white",
              }}
            />
          )}
        </section>
        <div className="temperature-min-dbd">
          <p>{temperaturemin1}°</p>
        </div>
      </div>

      <div className="rectangle">
        <div className="day-and-label">
          <p>{firstLettre2}</p>
        </div>
        <div className="day-and-label">
          <p>{secondNumber2}</p>
        </div>
        <figcaption>
          <img
            className="icon-weather-day-by-day"
            src={`http://openweathermap.org/img/wn/${skyState2}@2x.png`}
            alt="symbole de l'état du ciel"
          />
        </figcaption>
        <div className="temperature-max-dbd">
          <p>{temperature2}°</p>
        </div>
        <section className="temps-min-and-rectangle">
          {temperature2 && (
            <div
              className="small-rectangle"
              style={{
                height: calculateDimensions(temperature2, 5).height,
                backgroundColor: "white",
              }}
            />
          )}
        </section>
        <div className="temperature-min-dbd">
          <p>{temperaturemin2}°</p>
        </div>
      </div>
      <div className="rectangle">
        <div className="day-and-label">
          <p>{firstLettre3}</p>
        </div>
        <div className="day-and-label">
          <p>{secondNumber3}</p>
        </div>
        <figcaption>
          <img
            className="icon-weather-day-by-day"
            src={`http://openweathermap.org/img/wn/${skyState3}@2x.png`}
            alt="symbole de l'état du ciel"
          />
        </figcaption>
        <div className="temperature-max-dbd">
          <p>{temperature3}°</p>
        </div>
        <section className="temps-min-and-rectangle">
          {temperature3 && (
            <div
              className="small-rectangle"
              style={{
                height: calculateDimensions(temperature3, 5).height,
                backgroundColor: "white",
              }}
            />
          )}
        </section>
        <div className="temperature-min-dbd">
          <p>{temperaturemin3}°</p>
        </div>
      </div>
      <div className="rectangle">
        <div className="day-and-label">
          <p>{firstLettre4}</p>
        </div>
        <div className="day-and-label">
          <p>{secondNumber4}</p>
        </div>

        <figcaption>
          <img
            className="icon-weather-day-by-day"
            src={`http://openweathermap.org/img/wn/${skyState4}@2x.png`}
            alt="symbole de l'état du ciel"
          />
        </figcaption>
        <div className="temperature-max-dbd">
          <p>{temperature4}°</p>
        </div>
        <section className="temps-min-and-rectangle">
          {temperature4 && (
            <div
              className="small-rectangle"
              style={{
                height: calculateDimensions(temperature4, 5).height,
                backgroundColor: "white",
              }}
            />
          )}
        </section>
        <div className="temperature-min-dbd">
          <p>{temperaturemin4}°</p>
        </div>
      </div>
    </section>
  );
}
export default DayByday;
