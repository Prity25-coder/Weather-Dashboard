import { RouterProvider } from "react-router-dom";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

import "./App.css";
import appRoutes from "./app.routes";

Chart.register(CategoryScale);

function App() {
  return <RouterProvider router={appRoutes} />;
}

export default App;
