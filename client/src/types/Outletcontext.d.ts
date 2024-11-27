interface CityOutletContextType {
  city: string;
  setCity: (city: string) => void;
  colorCircle: string;
  setColorCircle: (value: string) => void;
  setBackground: (value: string) => void;
  background: string;
  setIdCity: (id: string) => void;
  idCity: string;
}

export default CityOutletContextType;
