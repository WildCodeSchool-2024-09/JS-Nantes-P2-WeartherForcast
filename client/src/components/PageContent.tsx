import { Outlet } from "react-router-dom";

export default function PageContent() {
  return (
    <main>
      <h1>CITY</h1>
      <Outlet />
    </main>
  );
}

