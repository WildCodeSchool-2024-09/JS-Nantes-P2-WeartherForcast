import "/src/style/DayByDay.css";

import { useEffect, useState } from "react";

function DayByday() {
  //  https://codesandbox.io/p/sandbox/ftn8jn LIEN SANDBOX A NE PAS PERDE !!!!!!!!

  // TODO : clean code with a object for exemple
  // const [moredata, setData] = useState("");
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
      "https://api.openweathermap.org/data/2.5/forecast?q=Nantes&cnt1=1&appid=db33a6aa09eb95eb5bae868283feca9e&units=metric",
    )
      .then((response) => response.json())
      .then((data) => {
        // setData(data);
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
        // console.log(moredata);
        // console.log(data.list[0].weather[0].icon);
        // console.log(data.list[0].main.temp_min);
        // console.log(data.list[0].main.temp_max);
      });
  }, []);
  const calculateDimensions = (temperature: number) => {
    // Logique de calcul ici, par exemple :
    // const width = temperature * 10;
    const height = temperature * 5;
    return { height };
  };
  const calculateDimensions1 = (temperature1: number) => {
    // Logique de calcul ici, par exemple :
    // const width = temperature * 10;
    const height = temperature1 * 5;
    return { height };
  };
  const calculateDimensions2 = (temperature2: number) => {
    // Logique de calcul ici, par exemple :
    // const width = temperature * 10;
    const height = temperature2 * 5;
    return { height };
  };
  const calculateDimensions3 = (temperature3: number) => {
    // Logique de calcul ici, par exemple :
    // const width = temperature * 10;
    const height = temperature3 * 5;
    return { height };
  };
  const calculateDimensions4 = (temperature4: number) => {
    // Logique de calcul ici, par exemple :
    // const width = temperature * 10;
    const height = temperature4 * 5;
    return { height };
  };

  function getDayName(dateStr: string, locale: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  }
  getDayName(skyDate, "en-US");
  const dayname = getDayName(skyDate, "en-US");
  const firstlettre = Array.from(dayname)[0];
  const secondnumber = Array.from(skyDate)[8] + Array.from(skyDate)[9];
  const dayname1 = getDayName(skyDate1, "en-US");
  const firstlettre1 = Array.from(dayname1)[0];
  const secondnumber1 = Array.from(skyDate1)[8] + Array.from(skyDate1)[9];
  const dayname2 = getDayName(skyDate2, "en-US");
  const firstlettre2 = Array.from(dayname2)[0];
  const secondnumber2 = Array.from(skyDate2)[8] + Array.from(skyDate2)[9];
  const dayname3 = getDayName(skyDate3, "en-US");
  const firstlettre3 = Array.from(dayname3)[0];
  const secondnumber3 = Array.from(skyDate3)[8] + Array.from(skyDate3)[9];
  const dayname4 = getDayName(skyDate4, "en-US");
  const firstlettre4 = Array.from(dayname4)[0];
  const secondnumber4 = Array.from(skyDate4)[8] + Array.from(skyDate4)[9];

  return (
    <section className="day">
      <div className="container-rectangle">
        <div className="rectangle">
          <div className="datebdb">{firstlettre}</div>
          <div className="datebdb">{secondnumber}</div>
          <figcaption>
            <img
              src={`http://openweathermap.org/img/wn/${skyState}@2x.png`}
              alt="symbole de l'état du ciel"
            />
          </figcaption>
          <div className="temperaturemaxdbd">{temperature}°</div>
          <section className="tempsminandrectangle">
            {temperature && (
              <div
                className="small-rectangle"
                style={{
                  // width: calculateDimensions(temperature).width,
                  height: calculateDimensions(temperature).height,
                  backgroundColor: "white",
                }}
              />
            )}
            <div className="temperatureminbdb">{temperaturemin}°</div>
          </section>
        </div>
      </div>
      <div className="rectangle">
        <div className="datebdb">{firstlettre1}</div>
        <div className="datebdb">{secondnumber1}</div>
        <figcaption>
          <img
            src={`http://openweathermap.org/img/wn/${skyState1}@2x.png`}
            alt="symbole de l'état du ciel"
          />
        </figcaption>
        <div className="temperaturemaxdbd">{temperature1}°</div>
        <section className="tempsminandrectangle">
          {temperature1 && (
            <div
              className="small-rectangle"
              style={{
                height: calculateDimensions1(temperature1).height,
                backgroundColor: "white",
              }}
            />
          )}
          <div className="temperatureminbdb">{temperaturemin1}°</div>
        </section>
      </div>

      <div className="rectangle">
        <div className="datebdb">{firstlettre2}</div>
        <div className="datebdb">{secondnumber2}</div>
        <figcaption>
          <img
            src={`http://openweathermap.org/img/wn/${skyState2}@2x.png`}
            alt="symbole de l'état du ciel"
          />
        </figcaption>
        <div className="temperaturemaxdbd">{temperature2}°</div>
        <section className="tempsminandrectangle">
          {temperature2 && (
            <div
              className="small-rectangle"
              style={{
                height: calculateDimensions2(temperature2).height,
                backgroundColor: "white",
              }}
            />
          )}
          <div className="temperatureminbdb">{temperaturemin2}°</div>
        </section>
      </div>
      <div className="rectangle">
        <div className="datebdb">{firstlettre3}</div>
        <div className="datebdb">{secondnumber3}</div>
        <figcaption>
          <img
            src={`http://openweathermap.org/img/wn/${skyState3}@2x.png`}
            alt="symbole de l'état du ciel"
          />
        </figcaption>
        <div className="temperaturemaxdbd">{temperature3}°</div>
        <section className="tempsminandrectangle">
          {temperature3 && (
            <div
              className="small-rectangle"
              style={{
                height: calculateDimensions3(temperature3).height,
                backgroundColor: "white",
              }}
            />
          )}
          <div className="temperatureminbdb">{temperaturemin3}°</div>
        </section>
      </div>
      <div className="rectangle">
        <div className="datebdb">{firstlettre4}</div>
        <div className="datebdb">{secondnumber4}</div>

        <figcaption>
          <img
            src={`http://openweathermap.org/img/wn/${skyState4}@2x.png`}
            alt="symbole de l'état du ciel"
          />
        </figcaption>
        <div className="temperaturemaxdbd">{temperature4}°</div>
        <section className="tempsminandrectangle">
          {temperature4 && (
            <div
              className="small-rectangle"
              style={{
                height: calculateDimensions4(temperature4).height,
                backgroundColor: "white",
              }}
            />
          )}
          <div className="temperatureminbdb">{temperaturemin4}°</div>
        </section>
      </div>
    </section>
  );
}
export default DayByday;
