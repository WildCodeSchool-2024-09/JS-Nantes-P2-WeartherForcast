import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import DayByDay from "./pages/DayByDay";
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
        element: <Today />,
      },
      {
        path: "/today",
        element: <Today />,
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
