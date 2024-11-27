export interface WeatherTempImagesProps {
  [id: string]: string[];
}
export interface weatherConditionItemProps {
  [id: number]: string;
}

export interface rangeDefinitionValues {
  humidIn: string | number;
  humidPref: string | number;
  tempIn: string | number;
  tempPref: string | number;
}

export interface TempMaxProps {
  tempMax: number;
  setTempMax: (value: number) => void;
}

export interface wtwProps {
  tempMax: string;
  conditID: number;
  conditions: string;
}
