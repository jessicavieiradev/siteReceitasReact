import { ClockIcon, CookingPotIcon, UserIcon } from "lucide-react";
import Button from "../button/Button";
import Title from "../Title/Title";
import type { Recipe } from "../DataProviderRecipes/DataProviderRecipes";
import { useNavigate } from "react-router-dom";

const RecipesCard = ({ recipe }: { recipe: Recipe }) => {
  const navigate = useNavigate();

  if (!recipe) {
    return null;
  }

  const handleNavigate = () => {
    navigate(`/siteReceitasReact/recipes/${recipe.id}`);
  };
  return (
    <div
      className="flex flex-col justify-between space-y-4 p-2  max-w-[400px]"
      key={recipe.id}
    >
      <div>
        <img className="rounded-lg object-cover" src={recipe.image} />
      </div>
      <Title as="h3" className="text-2xl">
        {recipe.name}
      </Title>
      <div className="flex flex-wrap gap-4">
        <span className="flex gap-2">
          <UserIcon />
          Serving: {recipe.servings}
        </span>
        <span className="flex gap-2">
          <ClockIcon />
          Prep: {recipe.prepTimeMinutes} min
        </span>
        <span className="flex gap-2">
          <CookingPotIcon />
          Cook: {recipe.cookTimeMinutes} min
        </span>
      </div>
      <Button onClick={handleNavigate} className="w-full">
        View Recipe
      </Button>
    </div>
  );
};

export default RecipesCard;
