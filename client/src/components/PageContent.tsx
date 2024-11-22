import { Outlet } from "react-router-dom";
import type CityOutletContextType from "../types/Outletcontext";

export default function PageContent({
  outletContext,
}: { outletContext: CityOutletContextType }) {
  return (
    <section>
      <Outlet context={outletContext} />
    </section>
  );
}
