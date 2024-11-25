// import { useOutletContext } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import { useState, useEffect } from "react";
// import type WhatToWearInterfaces from "../types/whatToWear";

// const clothingPref =
//   useOutletContext<WhatToWearInterfaces.OutletContextProps>().clothingPref;
// const [wind, setWind] = useState(0);
// const [humidity, setHumidity] = useState("");
// const [humidityRange, sethumidityRange] = useState("");
// const url =
//   "https://api.openweathermap.org/data/2.5/weather?q=Nantes&appid=07310a0f69c5739447b27cfd4c17e3dd&units=metric";

function WhatToWearMore() {
  // FETCH API
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setHumidity(data.main.humidity);
  //       setWind(data.wind.speed);
  //     })
  //     .catch((err) => console.error(err));
  // }, [url]);

  //  FIND HUMIDITY RANGE (ie: warm, very warm, cool, etc.)
  // useEffect(() => {
  //   function findHumidityRange(humidIn: string, humidPref: string) {
  //     const prefRealFeel =
  //       Number.parseInt(humidIn) + Number.parseInt(humidPref);
  //     for (const range of humidityRanges) {
  //       if (prefRealFeel >= range.start && prefRealFeel <= range.end) {
  //         sethumidityRange(range.humidity);
  //         break;
  //       }
  //     }
  //   }
  //   findHumidityRange(humidity, clothingPref.humidityPref);
  // }, [humidity, clothingPref.humidityPref]);

  return (
    <>
      <div>
        <p>This is the page</p>
      </div>
    </>
  );
}
export default WhatToWearMore;
