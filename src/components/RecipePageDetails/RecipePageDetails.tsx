import { useParams } from "react-router-dom";
import {
  useData,
  type Recipe,
} from "../DataProviderRecipes/DataProviderRecipes";
import { useEffect, useState } from "react";
import Title from "../Title/Title";
import {
    CalculatorIcon,
  ChevronRightIcon,
  ClockIcon,
  CookingPotIcon,
  EarthIcon,
  UserIcon,
  UtensilsIcon,
} from "lucide-react";

const RecipePageDetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id || "");

  const { recipes, loading, error } = useData();

  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (loading || error) {
      return;
    }

    const foundRecipe = recipes.find(
      (recipe: Recipe) => recipe.id === recipeId
    );
    setCurrentRecipe(foundRecipe || null);
  }, [recipeId, recipes, loading, error]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  if (!currentRecipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <section className="container mx-auto mt-24 md:mt-40 space-y-8 flex flex-col items-center">
      <Title className="text-3xl md:text-4xl text-center">
        {currentRecipe.name}
      </Title>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4 justify-center">
          <span className="flex gap-2">
            <UserIcon />
            Serving: {currentRecipe.servings}
          </span>
          <span className="flex gap-2">
            <ClockIcon />
            Prep: {currentRecipe.prepTimeMinutes} min
          </span>
          <span className="flex gap-2">
            <CookingPotIcon />
            Cook: {currentRecipe.cookTimeMinutes} min
          </span>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <span className="flex gap-2">
            <EarthIcon />
            Origin: {currentRecipe.cuisine}
          </span>
          <span className="flex gap-2">
            <CalculatorIcon />
            Calories Per Serving: {currentRecipe.caloriesPerServing} kcal
          </span>
          <span className="flex gap-2">
            <UtensilsIcon />
            Meal Type: {currentRecipe.mealType}
          </span>
        </div>
      </div>
      <div className=" flex flex-col-reverse md:flex-row justify-center md:items-center gap-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <Title as="h3" className="text-2xl">
            Ingredients
          </Title>
          <ul className="flex flex-col gap-2">
            {currentRecipe.ingredients.map((ingredient, index) => (
              <li className="flex gap-2" key={index}>
                <ChevronRightIcon /> {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 overflow-hidden">
          <img
            className="w-[500px] h-[300px] object-cover"
            src={currentRecipe.image}
            alt=""
          />
        </div>
      </div>

      <div className=" flex flex-col gap-4">
        <Title as="h3" className="text-2xl">
          Instructions
        </Title>
        <ul className="flex flex-col gap-2">
          {currentRecipe.instructions.map((instruction, index) => (
            <li className="flex  gap-2" key={index}>
              - {instruction}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RecipePageDetails;
