import "/src/style/FavoriteCityCard.css";
import { useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import rubbishBin from "../assets/icons/rubbish-bin.png";
import visibilityIcon from "../assets/icons/visibility-icon.png";
import type CityOutletContextType from "../types/Outletcontext";

export default function FavoriteCityCard() {
  const h2Ref = useRef<HTMLHeadingElement>(null);

  const outletContext = useOutletContext<CityOutletContextType>();
  const navigate = useNavigate();

  const handleClickVisibility = () => {
    if (h2Ref?.current) {
      const cityName = h2Ref.current.textContent as string;
      outletContext.setCity(cityName);
    }

    navigate("/today");
  };

  // const handleClickRemove = (

  // )

  // TODO: function for remove city of localStorage
  //TODO: map on cities in localStorage

  return (
    <section className="city-favorite-card">
      <div className="city-favorite-card-header">
        <h2 className="city-favorite-card-title" ref={h2Ref}>
          Nantes
        </h2>
      </div>
      <div className="city-favorite-card-footer">
        <div className="visibility-container">
          <button type="button" onClick={handleClickVisibility}>
            <img className="visibility-icon" src={visibilityIcon} alt="" />
          </button>
        </div>
        <div className="rubbish-bin-container">
          <button type="button">
            {/* onClick={handleClickRemove} */}
            <img className="rubbish-bin-icon" src={rubbishBin} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
