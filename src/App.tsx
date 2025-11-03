import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import Home from "./components/Home/Home";
import RecipePageDetails from "./components/RecipePageDetails/RecipePageDetails";
import { useData } from "./components/DataProviderRecipes/DataProviderRecipes";

function App() {
  const { rotaPrincipal } = useData();
  return (
    <>
      <Header />
      <Routes>
        <Route path={`${rotaPrincipal}`} element={<Home />} />
        <Route path={`${rotaPrincipal}recipes`} element={<Recipes />} />
        <Route path={`${rotaPrincipal}recipes/:id`} element={<RecipePageDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
