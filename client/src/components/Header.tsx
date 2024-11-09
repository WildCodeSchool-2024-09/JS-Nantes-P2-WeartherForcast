import { Link } from "react-router-dom";
import "/src/style/header.css";
import menuBurger from "/src/assets/icons/menu-burger.png";
import logo from "/src/assets/images/logo.svg";

export default function Header() {
  return (
    <header>
      <button type="button">
        <img src={menuBurger} alt="" />
      </button>
      <nav>
        <Link to="/">Geolocalise me</Link>
        <Link to="/myCities">My cities</Link>
        <Link to="/preferenciesWear">My preferencies</Link>
      </nav>
      <img className="logo" src={logo} alt="logo Weather Forcast" />
    </header>
  );
}
