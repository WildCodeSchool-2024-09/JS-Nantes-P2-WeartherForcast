import { useOutletContext } from "react-router-dom";
import type PreferencesWearInterfaces from "../types/preferencesWear";
import "../style/preferencesWear.css";

function ClothingPreferences() {
  const { warmthPref, setWarmthPref } =
    useOutletContext<PreferencesWearInterfaces.OutletContextProps>();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWarmthPref(event.target.value);
  };

  return (
    <div className="cp-main-div">
      <h1 className="cp-title">My Preferences</h1>
      <h3 className="cp-slide-title">I have the tendancy to be:</h3>
      <input
        className="cp-slider"
        type="range"
        id="warmth-slider"
        min={-10}
        max={10}
        step={1}
        value={warmthPref}
        onChange={handleChange}
      />
      <figcaption className="cp-slider-div">
        <h4 className="cp-slide-label">Very Cold</h4>
        <h4 className="cp-slide-label">Very Warm</h4>
      </figcaption>
    </div>
  );
}

export default ClothingPreferences;
