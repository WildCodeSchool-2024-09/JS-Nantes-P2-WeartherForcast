import { Outlet } from "react-router-dom";

interface PageContentProps {
  outletContext: { city: string; setCity: (value: string) => void };
}

export default function PageContent({ outletContext }: PageContentProps) {
  return (
    <section>
      <p>test</p>
      <Outlet context={outletContext} />
    </section>
  );
}
