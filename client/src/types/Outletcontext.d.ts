interface CityOutletContextType {
  city: string;
  setCity: (city: string) => void;
  colorCircle: string;
  setColorCircle: (value: string) => void;
  setBackground: (value: string) => void;
  background: string;
}

export default CityOutletContextType;
