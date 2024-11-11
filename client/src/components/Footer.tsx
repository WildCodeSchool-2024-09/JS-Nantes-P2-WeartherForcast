import { NavLink } from "react-router-dom";
import "/src/style/footer.css";

export default function Footer() {
  return (
    <footer>
      <NavLink to="/">Today</NavLink>
      <NavLink to="/dayByDay">Day By Day</NavLink>
      <NavLink to="/WeatherNews">Weather News</NavLink>
    </footer>
  );
}
