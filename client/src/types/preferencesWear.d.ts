export interface OutletContextProps {
  city: string;
  setCity: (value: string) => void;
  clothingPref: {
    warmthPref: "";
    humidityPref: "";
    bikePref: false;
    pubTransPref: false;
    drivePref: false;
    walkPref: false;
    wind: 0;
    windDirection: 0;
  };
  setClothingPref: (clothingPref: object) => void;
}
export interface humidityCounselProps {
  [humidity: string]: string;
}

export interface windCounselProps {
  [beaufort: number]: string;
}

interface useStateProps {
  tempMax: number | string | undefined;
  newHumidity: number | string | undefined;
}
export default PreferencesWearInterfaces;
