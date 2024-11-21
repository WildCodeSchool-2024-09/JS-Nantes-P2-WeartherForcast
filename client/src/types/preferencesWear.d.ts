interface OutletContextProps {
  clothingPref: {
    warmthPref: 0;
    humidPref: 0;
    bikePref: false;
    pubTransPref: false;
    drivePref: false;
    walkPref: false;
  };
  setClothingPref: (clothingPref: object) => void;
}

interface useStateProps {
  tempMax: number | string;
}
export default PreferencesWearInterfaces;
