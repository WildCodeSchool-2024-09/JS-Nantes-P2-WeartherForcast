export interface WeatherConditionImagesProps {
  [id: number]: string[];
}
export interface WeatherTempImagesProps {
  [id: string]: string[];
}
export interface weatherConditionItemProps {
  [id: number]: string;
}
export interface OutletContextProps {
  city: string;
  setCity: (value: string) => void;
  warmthPref: number;
  setWarmthPref: (value: number) => void;
  clothingPref: {
    warmthPref: 0;
    humidPref: 0;
    bikePref: false;
    pubTransPref: false;
    drivePref: false;
    walkPref: false;
  };
}

export interface useStateProps {
  tempMax: number;
  setTempMax: (value: number) => void;
}

export interface clothingPrefProps {
  warmthPref: 0;
  humidPref: 0;
  bikePref: false;
  pubTransPref: false;
  drivePref: false;
  walkPref: false;
}
export interface wtwProps {
  tempMax: number;
  conditID: number;
  conditions: string;
}
