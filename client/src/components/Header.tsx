import "/src/style/header.css";
import menuBurgerOpen from "/src/assets/icons/burgerMenuOpen.png";
import menuBurger from "/src/assets/icons/menu-burger.png";
import logo from "/src/assets/images/logo.svg";

interface HeaderProps {
  setMenuOpen: (value: boolean) => void;
  isMenuOpen: boolean;
}

export default function Header({ setMenuOpen, isMenuOpen }: HeaderProps) {
  //ONCLICK BUTTON MENU BURGER
  const handleClick = () => {
    setMenuOpen(isMenuOpen ? false : true); 
  };

  return (
    <header>
      <section className="navBar">
        <button type="button" onClick={handleClick}>
          <img
            src={isMenuOpen ? `${menuBurgerOpen}` : `${menuBurger}`}
            alt=""
          />
        </button>
        <img className="logo" src={logo} alt="logo Weather Forcast" />
      </section>
    </header>
  );
}
