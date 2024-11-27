import { NavLink, useNavigate } from "react-router-dom";
import { geolocaliseMe } from "../utilitiesFunctions/geolocation";

export default function MenuHeader(props: {
  setters: {
    setCity: React.Dispatch<React.SetStateAction<string>>;
    setBackground: React.Dispatch<React.SetStateAction<string>>;
    setColorCircle: (value: string) => void;
    setIdCity: (id: string) => void;
  };
}) {
  const { setCity, setBackground, setColorCircle, setIdCity } = props.setters;
  const navigate = useNavigate();
  return (
    <section className="menu-dropdown">
      <nav>
        <button
          className="geoloc-button"
          type="button"
          onClick={() => {
            geolocaliseMe(setCity, setBackground, setColorCircle, setIdCity);
            navigate("/today"); //👉FIXE ME LATER? WARNING geolocaliseMe is not async so maybe a problem with the promise API who could arrive after the navigation
          }} //SOLUTION for later => use LOADER of react-router
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
