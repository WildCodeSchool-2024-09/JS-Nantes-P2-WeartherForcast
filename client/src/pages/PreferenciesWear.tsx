import { useOutletContext } from "react-router-dom";
import "../style/preferencesWear.css";
import { useEffect } from "react";
import type { ClothingPrefTypes } from "../types/preferencesWear";

function ClothingPreferences() {
  // OUTLET CONTEXT PARAMETERS
  const { clothingPref, setClothingPref } =
    useOutletContext<ClothingPrefTypes>();

  // CHANGE HANDLERS

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setClothingPref({
      ...clothingPref,
      [name]: value,
    });
  };
  console.warn(clothingPref);
  const handleInputChangeChkBox = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, checked } = event.target;
    setClothingPref({
      ...clothingPref,
      [name]: checked,
    });
  };

  useEffect(() => {
    localStorage.setItem("clothingPref", JSON.stringify(clothingPref));
  }, [clothingPref]);

  return (
    <div className="cp-main-div">
      <h2 className="cp-title">My Preferences</h2>

      {/*Sliders  */}
      <section className="cp-sliders">
        <h3 className="cp-slide-title">Warmth:</h3>
        <input
          className="cp-slider"
          type="range"
          id="warmthPref"
          name="warmthPref"
          min={-10}
          max={10}
          step={1}
          defaultValue={clothingPref?.warmthPref}
          onChange={handleInputChange}
        />
        <figcaption className="cp-slider-div">
          <h4 className="cp-slide-label">I'm often cold</h4>
          <h4 className="cp-slide-label">I'm often warm</h4>
        </figcaption>
      </section>

      <section className="cp-sliders">
        <h3 className="cp-slide-title">Humidity:</h3>
        <input
          className="cp-slider"
          type="range"
          id="humidityPref"
          min={-10}
          max={10}
          step={1}
          name="humidityPref"
          defaultValue={clothingPref?.humidityPref}
          onChange={handleInputChange}
        />
        <figcaption className="cp-slider-div">
          <h4 className="cp-slide-label">Isn't a problem</h4>
          <h4 className="cp-slide-label">Really gets to me</h4>
        </figcaption>
      </section>

      <div className="cp-check-box-div">
        <h3 className="cp-slide-title">I regularly:</h3>
        <section className="cp-check-boxes">
          <input
            type="checkbox"
            id="bikePref"
            name="bikePref"
            defaultChecked={clothingPref?.bikePref}
            onChange={handleInputChangeChkBox}
          />
          <p>go bike riding</p>
          <input
            type="checkbox"
            id="walkPref"
            name="walkPref"
            defaultChecked={clothingPref?.walkPref}
            onChange={handleInputChangeChkBox}
          />
          <p>walk long distances</p>
          <input
            type="checkbox"
            id="drivePref"
            name="drivePref"
            defaultChecked={clothingPref?.drivePref}
            onChange={handleInputChangeChkBox}
          />
          <p>drive a vehicle</p>
          <input
            type="checkbox"
            id="pubTransPref"
            name="pubTransPref"
            defaultChecked={clothingPref?.pubTransPref}
            onChange={handleInputChangeChkBox}
          />
          <p>use public transport</p>
        </section>
      </div>
    </div>
  );
}

export default ClothingPreferences;
