import { Outlet } from "react-router-dom";

export interface contextCityProps {
  outletContext: {
    city: string;
    setCity: (value: string) => void;
    colorCircle: string;
    setBackground: (value: string) => void;
    background: string;
  };
}

export default function PageContent({ outletContext }: contextCityProps) {
  return (
    <section>
      <Outlet context={outletContext} />
    </section>
  );
}
