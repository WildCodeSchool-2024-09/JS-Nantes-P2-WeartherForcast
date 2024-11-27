import { useNavigate } from "react-router-dom";
import { geolocaliseMe } from "../utilitiesFunctions/geolocation";

export default function MenuHeader(props: {
  setters: {
    setCity: React.Dispatch<React.SetStateAction<string>>;
    setBackground: React.Dispatch<React.SetStateAction<string>>;
    setColorCircle: (value: string) => void;
    setIdCity: (id: string) => void;
    setMenuOpen: (value: boolean) => void;
  };
}) {
  const { setCity, setBackground, setColorCircle, setIdCity, setMenuOpen } =
    props.setters;
  const navigate = useNavigate();
  return (
    <section className="menu-dropdown">
      <nav>
        <button
          className="nav-button"
          type="button"
          onClick={() => {
            geolocaliseMe(setCity, setBackground, setColorCircle, setIdCity);
            navigate("/today"); //👉FIXE ME LATER? WARNING geolocaliseMe is not async so maybe a problem with the promise API who could arrive after the navigation
            setMenuOpen(false); //SOLUTION for later => use LOADER of react-router
          }}
        >
          Geolocalise me
        </button>
        <button
          className="nav-button"
          type="button"
          onClick={() => {
            navigate("/myCities");
            setMenuOpen(false);
          }}
        >
          My cities
        </button>
        <button
          className="nav-button"
          type="button"
          onClick={() => {
            navigate("/preferenciesWear");
            setMenuOpen(false);
          }}
        >
          My preferencies
        </button>
      </nav>
    </section>
  );
}
