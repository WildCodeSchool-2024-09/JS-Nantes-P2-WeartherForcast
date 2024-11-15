import { Outlet } from "react-router-dom";

interface contextCityProps {
  outletContext: {
    city: string;
    setCity: (value: string) => void;
    colorCircle: string;
  };
}

export default function PageContent({ outletContext }: contextCityProps) {
  return (
    <section>
      <Outlet context={outletContext} />
    </section>
  );
}
