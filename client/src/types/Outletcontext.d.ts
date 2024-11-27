interface CityOutletContextType {
  city: string;
  setCity: (city: string) => void;
  clothingPref;
  setClothingPref: (clothingPref) => void;
  wind: number;
  setWind: (wind: number) => void;
  windDirection: number;
  setWindDirection: (windDirection: number) => void;
  newHumidity: string;
  setNewHumidity: (newHumidity: string) => void;
}

export default CityOutletContextType;
