import { NavLink } from "react-router-dom";
import "/src/style/footer.css";
import heartPurple from "/src/assets/icons/heart-purple.png";

export default function Footer() {
  return (
    <footer>
      <nav>
        <NavLink to="/">Today</NavLink>
        <NavLink to="/dayByDay">Day By Day</NavLink>
        <NavLink to="/WeatherNews">News</NavLink>
      </nav>
      <div>
        <p>2024 copyright</p>
        <img src={heartPurple} alt="" />
        <p>teamUs</p>
      </div>
    </footer>
  );
}
