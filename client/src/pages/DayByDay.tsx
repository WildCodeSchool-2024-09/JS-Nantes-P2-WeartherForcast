import "/src/style/DayByDay.css";
// import "/src/assets/images/Cloudy.png/";
function DayByday() {
  return (
    <section className="day">
      <div className="container-rectangle">
        <div className="rectangle">
          <p className="dbd-text">M</p>
          <p className="day-number">6</p>
          <img src="../src/assets/images/Cloudy.png" alt="cloud" />
          <div className="small-rectangle" />
        </div>
      </div>
      <div className="rectangle">
        <p className="dbd-text">T</p>
        <p className="day-number">7</p>
        <img src="../src/assets/images/Cloudy.png" alt="cloud" />
        <div className="small-rectangle" />
      </div>

      <div className="rectangle">
        <p className="dbd-text">W</p>
        <p className="day-number">8</p>
        <img src="../src/assets/images/raining.png" alt="rain" />
        <div className="small-rectangle" />
      </div>
      <div className="rectangle">
        <p className="dbd-text">T</p>
        <p className="day-number">9</p>
        <img src="../src/assets/images/Blowing-snow.png" alt="snow" />
        <div className="small-rectangle" />
      </div>
      <div className="rectangle">
        <p className="dbd-text">F</p>
        <p className="day-number">10</p>
        <img src="../src/assets/images/Blowing-snow.png" alt="snow" />
        <div className="small-rectangle" />
      </div>
    </section>
  );
}

export default DayByday;
