import heartPurple from "../assets/icons/heart-purple.png";
import FavoriteCityCard from "../components/FavoriteCityCard";
import "/src/style/myCities.css";
// import type { NewCity } from "../types/newFavoriteCity";
// import { useState } from "react";

export default function MyCities() {
  //1.recuperer les cities du LS -> savedCities ->JSON.parse
  // const citiesUserInLocalStorage = localStorage.getItem("savedCities");
  // const savedCities = citiesUserInLocalStorage
  //   ? (JSON.parse(citiesUserInLocalStorage) as string)
  //   : [];

  // //2.definir un stqte avec savedCities
  // const [favorites, setFavorites] = useState(savedCities);

  //3.fair handleclick sur la poubelle qui prend un cityId
  // 3.1 -> dans ce click fair un setCities = currentCities.filter !id -> return un new tableau sans celui a remove
  //3.2 qui ecoute savedCities et qui setItem dans le LS le nouveau savedCities sans la ville supprimee en fonction de ce changement -> stringify
  //4. Dans ce component MyCities mapper savedCities issu du state et non du LS et pour chaque item retourner une favoriteCityCard avec en props
  // -cityiD, -CITYnAME, -onClick=le handleclick
  return (
    <section className="favorites-cities-container">
      <div className="container-header">
        <div className="container-title">
          <h2>My favorites cities</h2>
          <img className="iconFavoritesOnTitle" src={heartPurple} alt="" />
        </div>
      </div>
      <div className="container-body">
        <FavoriteCityCard />
      </div>
    </section>
  );
}
