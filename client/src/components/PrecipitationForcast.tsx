import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import type CityOutletContextType from "../types/Outletcontext";
import "../style/precipitationForcast.css";

function PrecipitationForecast() {
  const outletContext = useOutletContext<CityOutletContextType>();
  const [forecast, setForecast] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (outletContext.city) {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${outletContext.city}&cnt=1&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data.list && data.list.length > 0) {
            const precipitationProbability = data.list[0].pop; // Premier intervalle de 3 heures
            setForecast(precipitationProbability);
          }
        })
        .catch((err) =>
          console.error("Erreur lors de la récupération des données :", err),
        );
    }
  }, [outletContext.city]);

  return (
    <div className="precip-forecast-windows">
      {forecast && forecast > 0 ? (
        <p className="precip-forecast-txt">
          Précipitations attendues dans les trois prochaines heures à{" "}
          {outletContext.city} !
        </p>
      ) : (
        <p className="precip-forecast-txt">
          Pas de précipitations prévues dans les trois prochaines heures à{" "}
          {outletContext.city}.
        </p>
      )}
    </div>
  );
}

export default PrecipitationForecast;
