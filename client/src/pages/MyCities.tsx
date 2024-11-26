import heartPurple from "../assets/icons/heart-purple.png";
import FavoriteCityCard from "../components/FavoriteCityCard";
import "/src/style/myCities.css";

export default function MyCities() {
  return (
    <section className="favorites-cities-container">
      <div className="container-header">
        <div className="container-title">
          <h2>My favorites cities</h2>
          <img className="icon-favorites-on-title" src={heartPurple} alt="" />
        </div>
      </div>
      <div className="container-body">
        <FavoriteCityCard />
      </div>
    </section>
  );
}
