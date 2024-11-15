import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

interface OutletContextProps {
  city: string;
  setCity: (value: string) => void;
}

function PrecipitationForecast() {
  const outletContext = useOutletContext<OutletContextProps>();
  const [forecast, setForecast] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (outletContext.city) {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${outletContext.city}&cnt=1&appid=4e41f328e6b4fcf670b66844921c47d8`;

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
    <div>
      {forecast && forecast > 0 ? (
        <p>
          Précipitations attendues dans les trois prochaines heures à{" "}
          {outletContext.city} !
        </p>
      ) : (
        <p>
          Pas de précipitations prévues dans les trois prochaines heures à{" "}
          {outletContext.city}.
        </p>
      )}
    </div>
  );
}

export default PrecipitationForecast;
