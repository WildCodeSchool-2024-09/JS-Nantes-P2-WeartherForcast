interface CityOutletContextType {
  city: string;
  setCity: (city: string) => void;
  setBackground: (value: string) => void;
  background: string;
  weatherIcon: string;
  colorCircle: string;
  setColorCircle: (string) => void;
  setWeatherIcon: (value: string) => void;
  setIdCity: (id: string) => void;
  idCity: string;
}

export default CityOutletContextType;
