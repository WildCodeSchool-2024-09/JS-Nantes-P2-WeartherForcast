import "/src/style/FavoriteCityCard.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import rubbishBin from "../assets/icons/rubbish-bin.png";
import visibilityIcon from "../assets/icons/visibility-icon.png";
import type CityOutletContextType from "../types/Outletcontext";

interface FavoriteCityCardProps {
  name: string;
  id: string;
  onClickGarbage: (id: string) => void;
}

export default function FavoriteCityCard({
  name,
  id,
  onClickGarbage,
}: FavoriteCityCardProps) {
  const outletContext = useOutletContext<CityOutletContextType>();
  const navigate = useNavigate();

  const handleClickVisibility = () => {
    outletContext.setCity(name);
    navigate("/today");
  };

  return (
    <article className="city-favorite-card">
      <section className="city-favorite-card-header">
        <h2 className="city-favorite-card-title">Nantes</h2>
      </section>
      <section className="city-favorite-card-footer">
        <div className="visibility-container">
          <button type="button" onClick={handleClickVisibility}>
            <img className="visibility-icon" src={visibilityIcon} alt="" />
          </button>
        </div>
        <div className="rubbish-bin-container">
          <button type="button" onClick={() => onClickGarbage(id)}>
            <img className="rubbish-bin-icon" src={rubbishBin} alt="" />
          </button>
        </div>
      </section>
    </article>
  );
}
