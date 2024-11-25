export interface OutletContextProps {
  clothingPref: {
    warmthPref: 0;
    humidPref: 0;
    bikePref: false;
    pubTransPref: false;
    drivePref: false;
    walkPref: false;
    wind: 0;
    humidity: 0;
  };
  setClothingPref: (clothingPref: object) => void;
}

interface useStateProps {
  tempMax: number | string;
}
export default PreferencesWearInterfaces;
