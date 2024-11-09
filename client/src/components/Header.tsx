import { Link } from "react-router-dom";
import "/src/style/header.css";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Geolocalise me</Link>
        <Link to="/myCities">My cities</Link>
        <Link to="/preferenciesWear">My preferencies</Link>
      </nav>
    </header>
  );
}
