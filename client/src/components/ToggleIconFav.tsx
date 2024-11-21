import Inactive from "../assets/icons/emptyheart.png";
import Active from "../assets/icons/white-heart.png";
import "../style/toggleIconFav.css";

function ToggleIconFav() {
  return (
    <>
      <h1>Toggle images</h1>
      <div className="toggle-wrapper">
        <img
          className="iconHeartFav, activeHeart"
          src={Active}
          alt="white heart"
        />
        <img
          className="iconHeartFav, inactiveHeart"
          src={Inactive}
          alt="empty heart"
        />
      </div>
    </>
  );
}

export default ToggleIconFav;
