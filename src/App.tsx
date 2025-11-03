import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import Home from "./components/Home/Home";
import RecipePageDetails from "./components/RecipePageDetails/RecipePageDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/siteReceitasReact/" element={<Home />} />
        <Route path="/siteReceitasReact/recipes" element={<Recipes />} />
        <Route path="/siteReceitasReact/recipes/:id" element={<RecipePageDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
