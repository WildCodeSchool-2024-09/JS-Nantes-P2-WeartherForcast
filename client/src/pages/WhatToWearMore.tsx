import { useOutletContext } from "react-router-dom";
import { NavLink } from "react-router-dom";
import type WhatToWearInterfaces from "../types/whatToWear";

const clothingPref =
  useOutletContext<WhatToWearInterfaces.OutletContextProps>().clothingPref;

function WhatToWearMore() {
  return (
    <>
      <div>
        <p>This is the page</p>
        <NavLink to="/today">Back</NavLink>
        <p>{clothingPref}</p>
      </div>
    </>
  );
}
export default WhatToWearMore;
