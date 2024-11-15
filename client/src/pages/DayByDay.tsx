import "/src/style/DayByDay.css";
function DayByday() {
  return (
    <section className="day">
      <div className=".rectangle-parent">
        <div className="rectangle">
          <p>M</p>
          <div className="small-rectangle" />
        </div>
      </div>
      <div className="rectangle">
        <div className="small-rectangle" />
      </div>

      <div className="rectangle">
        <div className="small-rectangle" />
      </div>
      <div className="rectangle">
        <div className="small-rectangle" />
      </div>
      <div className="rectangle">
        <div className="small-rectangle" />
      </div>
    </section>
  );
}

export default DayByday;
