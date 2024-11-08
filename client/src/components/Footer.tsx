import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Link to="/">Today</Link>
      <Link to="/WeatherNews">Weather News</Link>
    </footer>
  );
}
