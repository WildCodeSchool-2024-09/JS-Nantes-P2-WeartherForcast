import "./App.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MenuHeader from "./components/MenuHeader";
import PageContent from "./components/PageContent";
import SearchBar from "./components/SearchBar";
import { geolocaliseMe } from "./utilitiesFunctions/geolocation";

export default function App() {
  //MODAL MENU OPEN STATE
  const [isMenuOpen, setMenuOpen] = useState(false);
  //GENERAL CITY STATE
  const [city, setCity] = useState("");
  //ID OF THE GENERA CITY STATE
  const [idCity, setIdCity] = useState("");
  //BACKGROUND STATE FOR GEOLOC
  const [background, setBackground] = useState("");
  //COLOR CIRCLE METEO INFO STATE
  const [colorCircle, setColorCircle] = useState("");

  //GEOLOCATION ON LOAD
  useEffect(() => {
    geolocaliseMe(setCity, setBackground, setColorCircle, setIdCity);
  }, []);

  return (
    <>
      <Header setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen} />
      <main
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {isMenuOpen ? (
          <MenuHeader
            setters={{ setCity, setBackground, setColorCircle, setIdCity }}
          />
        ) : null}
        <SearchBar setCity={setCity} />
        <section className="page-content-section">
          <PageContent
            outletContext={{
              city,
              setCity,
              setColorCircle,
              colorCircle,
              setBackground,
              background,
              setIdCity,
              idCity,
            }}
          />
          {/* 💡 outletContext because it"s not possible to pass a standard context in an outlet, so react router have a specofoc context hook for that. 📖 DOC => https://reactrouter.com/en/main/hooks/use-outlet-context*/}
        </section>
      </main>
      <Footer />
    </>
  );
}
