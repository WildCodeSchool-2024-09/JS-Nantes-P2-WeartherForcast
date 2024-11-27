import { NavLink } from "react-router-dom";
import "/src/style/footer.css";
import heartPurple from "/src/assets/icons/heart-purple.png";

export default function Footer() {
  return (
    <footer>
      <nav>
        <NavLink to="/today">
          <span>Today</span>
        </NavLink>
        <NavLink to="/dayByDay">
          <span>Day By Day</span>
        </NavLink>
        <NavLink to="/WeatherNews">
          <span>News</span>
        </NavLink>
      </nav>
      <div>
        <p>2024 copyright</p>
        <img src={heartPurple} alt="" />
        <p>teamUs</p>
      </div>
    </footer>
  );
}
