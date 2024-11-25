import "/src/style/DayByDay.css";
// import "/src/assets/images/Cloudy.png/";
// import { useState } from "react";

function DayByday() {
  // const [temperature, setTemperature] = useState();
  // {
  //   "list": [
  //     {
  //       "dt": 1661870400,
  //       "main": {
  //         "temp_min": 293.55,
  //         "temp_max": 294.75,
  //         "humidity": 82
  //       },
  //       "weather": [
  //         {
  //           "main": "Rain",
  //           "description": "light rain"
  //         }
  //       ],
  //       "pop": 0.2,
  //       "dt_txt": "2022-08-30 15:00:00"
  //     },
  //     ...
  //   ]
  // }

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
