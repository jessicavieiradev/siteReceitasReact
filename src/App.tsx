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
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipePageDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
