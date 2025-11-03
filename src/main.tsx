import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter} from "react-router-dom";
import DataProviderRecipes from "./components/DataProviderRecipes/DataProviderRecipes.tsx";

createRoot(document.getElementById("root")!).render(
  <DataProviderRecipes>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataProviderRecipes>
);
