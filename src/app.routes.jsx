import { createBrowserRouter } from "react-router-dom";
import WeatherForm from "./components/WeatherForm";
import Dashboard from "./components/Dashboard";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <WeatherForm />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default appRoutes;
