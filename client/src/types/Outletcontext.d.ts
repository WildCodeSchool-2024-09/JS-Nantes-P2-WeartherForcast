interface CityOutletContextType {
  city: string;
  setCity: (city: string) => void;
  colorCircle: string;
  setColorCircle: (value: string) => void;
  setBackground: (value: string) => void;
  background: string;
  setIdCity: (id: string) => void;
  idCity: string;
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
