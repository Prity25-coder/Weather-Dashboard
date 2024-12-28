import { createBrowserRouter } from "react-router-dom";
import WeatherForm from "./components/WeatherForm";
import GraphData from "./components/GraphData";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <WeatherForm />,
  },
  {
    path: "/dashboard",
    element: <GraphData />,
  },
]);

export default appRoutes;
