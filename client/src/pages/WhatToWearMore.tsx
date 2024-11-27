import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import humidityRanges from "../assets/Humidity";
import "../style/preferencesWear.css";
import { windRanges } from "../assets/Wind";
import { windDirectionRanges } from "../assets/Wind";
import type CityOutletContextType from "../types/Outletcontext";
import type {
  humidityCounselProps,
  windCounselProps,
} from "../types/preferencesWear";

function WhatToWearMore() {
  const { newHumidity, windDirection, wind, city, clothingPref } =
    useOutletContext<CityOutletContextType>();

  const [humidityRange, setHumidityRange] = useState("");
  const [windRange, setWindRange] = useState(0);
  const [windDirectionStatement, setWindDirectionStatement] = useState("");

  //  FIND HUMIDITY RANGE (ie: warm, very warm, cool, etc.)
  useEffect(() => {
    function findHumidityRange(humidIn: string, humidPref: string) {
      const prefHumidRealFeel =
        Number.parseInt(humidIn) + Number.parseInt(humidPref);
      for (const range of humidityRanges) {
        if (
          prefHumidRealFeel >= range.start &&
          prefHumidRealFeel <= range.end
        ) {
          setHumidityRange(range.humidity);
          break;
        }
      }
    }
    findHumidityRange(newHumidity, clothingPref.humidityPref);
  }, [newHumidity, clothingPref.humidityPref]);

  useEffect(() => {
    function findWindRange(windIn: number) {
      for (const range of windRanges) {
        if (windIn + 40 >= range.start && windIn + 40 <= range.end) {
          setWindRange(range.beaufort);
          break;
        }
      }
    }
    findWindRange(wind);
  }, [wind]);

  useEffect(() => {
    function findWindDirection(windDirectionIn: number) {
      for (const range of windDirectionRanges) {
        if (windDirectionIn >= range.start && windDirectionIn <= range.end) {
          setWindDirectionStatement(range.direction);
          break;
        }
      }
    }
    findWindDirection(windDirection);
  }, [windDirection]);

  const bikeWindCounsel: windCounselProps = {};
  const windCounsel: windCounselProps = {};
  for (const condition of windRanges) {
    windCounsel[condition.beaufort] = condition.effect;
    bikeWindCounsel[condition.beaufort] = condition.bike;
  }

  const humidityCounsel: humidityCounselProps = {};
  for (const condition of humidityRanges) {
    humidityCounsel[condition.humidity] = condition.advice;
  }

  return (
    <>
      <div className="wtwm-mother-div">
        <h3 className="wtwm-humidity-title">Humidity</h3>
        <p>
          With today's humidity in {city} {humidityCounsel[humidityRange]}
        </p>
        <h3 className="wtwm-wind-title">Wind</h3>
        <p>
          Wind speeds of {Math.round(wind)} km/h will result in a
          {windDirectionStatement} {windCounsel[windRange]}
        </p>
        {clothingPref.bikePref || clothingPref.pubTransPref ? (
          <h3 className="wtwm-trans-title">Transport</h3>
        ) : (
          ""
        )}

        {clothingPref.bikePref ? (
          <p>Today's conditions are {bikeWindCounsel[windRange]}</p>
        ) : (
          ""
        )}

        {clothingPref.pubTransPref ? (
          <p>
            Public transport still remains an effective method of getting
            around.{" "}
            {Number.parseInt(newHumidity) > 80 ? (
              <p>
                The high humidity might impact your comfort on overcrowded
                transport especially during peak hours.
                {clothingPref.drivePref ? (
                  <p> It may be preferable to drive.</p>
                ) : (
                  ""
                )}
              </p>
            ) : (
              ""
            )}
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default WhatToWearMore;
