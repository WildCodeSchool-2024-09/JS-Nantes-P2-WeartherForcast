import "/src/style/header.css";
import menuBurgerOpen from "/src/assets/icons/burgerMenuOpen.png";
import menuBurger from "/src/assets/icons/menu-burger.png";
import logo from "/src/assets/images/logo.svg";

interface HeaderProps {
  setMenuOpen: (value: boolean | ((current: boolean) => boolean)) => void;
  isMenuOpen: boolean;
}

export default function Header({ setMenuOpen, isMenuOpen }: HeaderProps) {
  //ONCLICK BUTTON MENU BURGER
  const handleClick = () => {
    setMenuOpen((currentMenuOpen) => !currentMenuOpen); /* 🆕 A chaque fois que je clique sur mon bouton, je dis que je veux setter la valeur de menu open a l'inverse de sa valeur courante grace a !currentMenuOpen. La fonction dans le set State prend en
    parametre la valeur courante (currentMenuOpen -> donnee fournit par useState) au moment de mon setState. Cette facon de faire est la facon LAZY qui permet de setter le state de facon decaler 
    (on lui dot d'attendre d'avoir terminer sa derniere operation),evitant des conflits si un utilisateur fait plein de clic tres vite */
  };

  return (
    <header>
      <section className="nav-bar">
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
