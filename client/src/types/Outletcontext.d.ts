interface CityOutletContextType {
  city: string;
  setCity: (city: string) => void;
  colorCircle: string;
  setBackground: (value: string) => void;
  background: string;
  setColorCircle: (value: string) => void;
  weatherIcon: string;
  setWeatherIcon: (value: string) => void;
}

export default CityOutletContextType;
