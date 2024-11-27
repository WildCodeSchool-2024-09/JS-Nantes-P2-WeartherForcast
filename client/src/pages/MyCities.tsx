import heartPurple from "../assets/icons/heart-purple.png";
import FavoriteCityCard from "../components/FavoriteCityCard";
import "/src/style/myCities.css";
import { useEffect, useState } from "react";
import type { NewCity } from "../types/newFavoriteCity";

export default function MyCities() {
  // 1.recuperer les cities du LS -> savedCities ->JSON.parse
  const citiesUserInLocalStorage = localStorage.getItem("savedCities");
  const savedCities = citiesUserInLocalStorage
    ? (JSON.parse(citiesUserInLocalStorage as string) as NewCity[])
    : [];

  // 2.definir un stqte avec savedCities issus du LS
  const [favorites, setFavorites] = useState(savedCities);

  // 3.fair handleclick sur la poubelle qui prend un cityId
  //   3.1 -> dans ce click fair un setCities = currentCities.filter !id -> return un new tableau sans celui a remove
  const handleClickRemove = (id: string) => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((city) => {
        return city.cityId !== id;
      }),
    );
  };

  // 4. UseEffectqui ecoute favorites et qui setItem dans le LS le nouveau savedCities sans la ville supprimee en fonction de ce changement -> stringify
  useEffect(() => {
    if (favorites) {
      localStorage.setItem("savedCities", JSON.stringify(favorites));
    }
  }, [favorites]);

  //5. Dans ce component MyCities, mapper favorites issu du state et non du LS et pour chaque item retourner une favoriteCityCard avec en props :
  // ->cityiD, ->cityName, ->onClick= le handleclickGarbage.
  return (
    <section className="favorites-cities-container">
      <div className="container-header">
        <h2>My favorites cities</h2>
        <img className="icon-favorites-on-title" src={heartPurple} alt="" />
      </div>
      <div className="container-body">
        {favorites.map((city) => {
          return (
            <FavoriteCityCard
              key={city.cityId}
              name={city.cityName}
              id={city.cityId}
              onClickGarbage={handleClickRemove}
            />
          );
        })}
      </div>
    </section>
  );
}
