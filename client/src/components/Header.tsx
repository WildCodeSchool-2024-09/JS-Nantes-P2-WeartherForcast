import { Link } from "react-router-dom";
import "/src/style/header.css";
import menuBurger from "/src/assets/icons/menu-burger.png";

export default function Header() {
  return (
    <header>
      <button>
      <img src={menuBurger} alt="logo Weather Forcast" />
      </button>
      <nav>
        <Link to="/">Geolocalise me</Link>
        <Link to="/myCities">My cities</Link>
        <Link to="/preferenciesWear">My preferencies</Link>
      </nav>      
    </header>
  );
}
