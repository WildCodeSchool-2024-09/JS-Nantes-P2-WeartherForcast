import "/src/style/FavoriteCityCard.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import rubbishBin from "../assets/icons/rubbish-bin.png";
import visibilityIcon from "../assets/icons/visibility-icon.png";
import type CityOutletContextType from "../types/Outletcontext";

export default function FavoriteCityCard() {
  const outletContext = useOutletContext<CityOutletContextType>();
  const navigate = useNavigate();

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    outletContext.setCity(`${event.currentTarget.dataset.id}`);
    navigate("/today");
  };

  // TODO: function for remove city of localStorage
  //TODO: map on cities in localStorage

  return (
    <section className="city-favorite-card">
      <div className="city-favorite-card-header">
        <h2 className="city-favorite-card-title">Nantes</h2>
      </div>
      <div className="city-favorite-card-footer">
        <div className="visibility-container">
          <button
            type="button"
            data-id="Nantes"
            onClick={(event) => {
              handleClick(event);
            }}
          >
            <img className="visibility-icon" src={visibilityIcon} alt="" />
          </button>
        </div>
        <div className="rubbish-bin-container">
          <button type="button">
            <img className="rubbish-bin-icon" src={rubbishBin} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
