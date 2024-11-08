import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/geolocation">Geolocalise me</Link>
        <Link to="/myCities">My cities</Link>
        <Link to="/preferenciesWear">My preferencies</Link>
      </nav>
    </header>
  );
}
