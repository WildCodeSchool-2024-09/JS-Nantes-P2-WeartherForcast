interface WeatherConditionImagesProps {
  [id: number]: string[];
}
interface WeatherTempImagesProps {
  [id: string]: string[];
}
interface weatherConditionItemProps {
  [id: number]: string;
}
interface OutletContextProps {
  city: string;
  setCity: (value: string) => void;
  warmthPref: number;
  setWarmthPref: (value: number) => void;
}

export default WhatToWearInterfaces;
