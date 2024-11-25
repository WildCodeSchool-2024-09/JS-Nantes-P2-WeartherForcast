import "/src/style/DayByDay.css";
import "/src/assets/images/Cloudy.png/";
// import { useEffect, useState } from "react";

function DayByday() {
  // https://codesandbox.io/p/sandbox/ftn8jn CODE SANDBOX A NE PAS PERDE !!!!!!!!

  // const [temperature, setTemperature] = useState(null);
  // useEffect(() => {
  //   fetch(
  //     "https://api.openweathermap.org/data/2.5/forecast?q=Nantes&cnt1=1&appid=db33a6aa09eb95eb5bae868283feca9e"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(moredata);
  //       console.log(data.list[8].main.temp_min);
  //       console.log(data.list[8].main.temp_max);
  //       console.log(data.list[8].main.feels_like);
  //     });
  // }, []);
  // useEffect(() => {
  //   fetch(
  //     "https://api.openweathermap.org/data/2.5/forecast?q={city}&appid=db33a6aa09eb95eb5bae868283feca9e",
  //   )
  //     .then((response) => response.json())
  // }, []);

  // setSkyState(data.list[8].weather[0].icon);
  // setTemperatureMin(Math.round(data.list[8].main.temp_min));
  // setTemperature(Math.round(data.list[8].main.temp_max));
  // setRealFeel(Math.round(data.list[8].main.feels_like));

  // return (
  //   <div className="App">
  //     <figcaption>
  //       <img
  //         src={`http://openweathermap.org/img/wn/${skyState}@2x.png`}
  //         alt="symbole de l'état du ciel"
  //       />
  //     </figcaption>
  //     <div className="temperaturemin">{temperaturemin}°</div>
  //     <div className="temperature">{temperature}°</div>
  //     <div className="real-feel">{realFeel}°</div>
  //   </div>
  // );

  return (
    <section className="day">
      <div className="container-rectangle">
        <div className="rectangle">
          <p className="dbd-text">M</p>
          <p className="day-number">6</p>
          <img src="../src/assets/images/Cloudy.png" alt="cloud" />
          <p className="dbd-temperature">17°</p>
          <div className="small-rectangle" />
          <p className="dbd-temperature">9°</p>
        </div>
      </div>
      <div className="rectangle">
        <p className="dbd-text">T</p>
        <p className="day-number">7</p>
        <img src="../src/assets/images/Cloudy.png" alt="cloud" />
        <p className="dbd-temperature">18°</p>
        <div className="small-rectangle" />
        <p className="dbd-temperature">9°</p>
      </div>

      <div className="rectangle">
        <p className="dbd-text">W</p>
        <p className="day-number">8</p>
        <img src="../src/assets/images/raining.png" alt="rain" />
        <p className="dbd-temperature">15°</p>
        <div className="small-rectangle" />
        <p className="dbd-temperature">7°</p>
      </div>
      <div className="rectangle">
        <p className="dbd-text">T</p>
        <p className="day-number">9</p>
        <img
          className="day-friday"
          src="../src/assets/images/Blowing-snow.png"
          alt="snow"
        />
        <p className="dbd-temperature">14°</p>
        <div className="small-rectangle" />
        <p className="dbd-temperature">8°</p>
      </div>
      <div className="rectangle">
        <p className="dbd-text">F</p>
        <p className="day-number">10</p>
        <img
          className="day-friday"
          src="../src/assets/images/Blowing-snow.png"
          alt="snow"
        />
        <p className="dbd-temperature">11°</p>
        <div className="small-rectangle" />
        <p className="dbd-temperature">5°</p>
      </div>
    </section>
  );
}

export default DayByday;
