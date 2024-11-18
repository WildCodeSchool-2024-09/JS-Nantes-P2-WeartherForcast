import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import DayByDay from "./pages/DayByDay";
import GeolocaliseMe from "./pages/GeolocaliseMe";
import MyCities from "./pages/MyCities";
import PreferenciesWear from "./pages/PreferenciesWear";
import Today from "./pages/Today";
import WeatherNews from "./pages/WeatherNews";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <GeolocaliseMe />,
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
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
