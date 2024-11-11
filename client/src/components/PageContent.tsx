import { useContext } from "react";
import { Outlet } from "react-router-dom";
import CityContext from "../context/CityContext";

export default function PageContent() {
  const city = useContext(CityContext);
  return (
    <section>
      <h1>{city.cityUser}</h1>
      <p>test</p>
      <Outlet />
    </section>
  );
}
