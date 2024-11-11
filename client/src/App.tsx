import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MenuHeader from "./components/MenuHeader";
import PageContent from "./components/PageContent";
import SearchBar from "./components/SearchBar";
import CityContext from "./context/CityContext";

export default function App() {
  //MODAL MENU OPEN STATE
  const [isMenuOpen, setMenuOpen] = useState(false);
  //GENERAL CITY STATE
  const [city, setCity] = useState({ cityUser: "Nantes" });

  return (
    <>
      <Header setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen} />

      <main>
        {isMenuOpen ? <MenuHeader /> : null}
        <CityContext.Provider value={city}>
          <SearchBar setCity={setCity} />
          <PageContent />
        </CityContext.Provider>
      </main>
      <Footer />
    </>
  );
}
