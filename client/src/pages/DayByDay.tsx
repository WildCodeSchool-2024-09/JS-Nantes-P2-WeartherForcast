import "/src/style/DayByDay.css";
import "/src/assets/images/Cloudy.png/";
// import { useEffect, useState } from "react";

function DayByday() {
  // https://codesandbox.io/p/sandbox/ftn8jn?file=%2Fsrc%2FApp.tsx%3A16%2C51 CODE SANDBOX A NE PAS PERDE !!!!!!!!

  // const [temperature, setTemperature] = useState(null);

  // useEffect(() => {
  //   fetch(
  //     "https://api.openweathermap.org/data/2.5/forecast?q={city}&appid=db33a6aa09eb95eb5bae868283feca9e",
  //   )
  //     .then((response) => response.json())
  // }, []);
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
