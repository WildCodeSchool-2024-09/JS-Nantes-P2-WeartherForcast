import { NavLink } from "react-router-dom";

export default function MenuHeader() {
  return (
    <section className="menu-dropdown">
      <nav>
        <NavLink to="/">Geolocalise me</NavLink>
        <NavLink to="/myCities">My cities</NavLink>
        <NavLink to="/preferenciesWear">My preferencies</NavLink>
        {/* 💡 <NavLink/> instead of <Link> allow to give an automatically active className for each link if you do a class named .active DOC=> https://reactrouter.com/en/main/components/nav-link*/}
      </nav>
    </section>
  );
}
