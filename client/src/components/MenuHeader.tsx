import { NavLink } from "react-router-dom";
import { geolocaliseMe } from "../utilitiesFunctions/geolocation";

export default function MenuHeader(props: {
  setters: {
    setCity: React.Dispatch<React.SetStateAction<string>>;
    setBackground: React.Dispatch<React.SetStateAction<string>>;
    setColorCircle: (value: string) => void;
  };
}) {
  const { setCity, setBackground, setColorCircle } = props.setters;
  return (
    <section className="menu-dropdown">
      <nav>
        <button
          type="button"
          onClick={() => {
            geolocaliseMe(setCity, setBackground, setColorCircle);
          }}
        >
          Geolocalise me
        </button>
        <NavLink to="/myCities">My cities</NavLink>
        <NavLink to="/preferenciesWear">My preferencies</NavLink>
        {/* 💡 <NavLink/> instead of <Link> allow to give an automatically active className for each link if you do a class named .active DOC=> https://reactrouter.com/en/main/components/nav-link*/}
      </nav>
    </section>
  );
}
