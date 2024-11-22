import { useOutletContext } from "react-router-dom";
import type PreferencesWearInterfaces from "../types/preferencesWear";
import "../style/preferencesWear.css";

function ClothingPreferences() {
  // OUTLET CONTEXT PARAMETERS
  const { clothingPref, setClothingPref } =
    useOutletContext<PreferencesWearInterfaces.OutletContextProps>();

  // CHANGE HANDLERS

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setClothingPref({
      ...clothingPref,
      [name]: value,
    });
  };

  const handleInputChangeChkBox = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, checked } = event.target;
    setClothingPref({
      ...clothingPref,
      [name]: checked,
    });
  };

  return (
    <div className="cp-main-div">
      <h2 className="cp-title">My Preferences</h2>

      {/*Sliders  */}
      <h3 className="cp-slide-title">I have the tendancy to be:</h3>
      <input
        className="cp-slider"
        type="range"
        id="warmthPref"
        name="warmthPref"
        min={-10}
        max={10}
        step={1}
        value={clothingPref.warmthPref}
        onChange={handleInputChange}
      />
      <figcaption className="cp-slider-div">
        <h4 className="cp-slide-label">Very Cold</h4>
        <h4 className="cp-slide-label">Very Warm</h4>
      </figcaption>

      <section>
        <h3 className="cp-slide-title">Humidity:</h3>
        <input
          className="cp-slider"
          type="range"
          id="humidity-slider"
          min={-10}
          max={10}
          step={1}
          name="humidityPref"
          value={clothingPref.humidityPref}
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
            checked={clothingPref.bikePref}
            onChange={handleInputChangeChkBox}
          />{" "}
          <label htmlFor="bike">go bike riding</label>
          <input
            type="checkbox"
            id="walkPref"
            name="walkPref"
            checked={clothingPref.walkPref}
            onChange={handleInputChangeChkBox}
          />{" "}
          <label htmlFor="walk">walk long distances</label>
          <input
            type="checkbox"
            id="drivePref"
            name="drivePref"
            checked={clothingPref.drivePref}
            onChange={handleInputChangeChkBox}
          />{" "}
          <label htmlFor="drive">drive a vehicle</label>
          <input
            type="checkbox"
            id="pubTransPref"
            name="pubTransPref"
            checked={clothingPref.pubTransPref}
            onChange={handleInputChangeChkBox}
          />{" "}
          <label htmlFor="pubTrans">use public transport</label>
        </section>
      </div>
    </div>
  );
}

export default ClothingPreferences;
