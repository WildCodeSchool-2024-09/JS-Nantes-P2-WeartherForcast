import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import DayByDay from "./pages/DayByDay";
import GeolocaliseMe from "./pages/GeolocaliseMe";
import MyCities from "./pages/MyCities";
import PreferenciesWear from "./pages/PreferenciesWear";
import Today from "./pages/Today";
import WeatherNews from "./pages/WeatherNews";
import WhatToWearMore from "./pages/WhatToWearMore";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Today />,
      },
      {
        path: "/geolocaliseMe",
        element: <GeolocaliseMe />,
      },
      {
        path: "/myCities",
        element: <MyCities />,
      },
      {
        path: "/preferenciesWear",
        element: <PreferenciesWear />,
      },
      {
        path: "/today",
        element: <Today />,
      },
      {
        path: "/dayByDay",
        element: <DayByDay />,
      },
      {
        path: "/WeatherNews",
        element: <WeatherNews />,
      },
      {
        path: "/WhatToWearMore",
        element: <WhatToWearMore />,
      },
    ],
  },
]);

export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
