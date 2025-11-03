import type { ChangeEvent } from "react";
import { useData } from "../DataProviderRecipes/DataProviderRecipes";

interface InputSearchRecipesProps {
  handlerSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputSearchRecipes = ({
  handlerSearchChange,
}: InputSearchRecipesProps) => {
  const { search } = useData();

  return (
    <input
      className="w-full md:w-1/2 p-4 rounded-lg border border-primary"
      type="text"
      value={search}
      onChange={handlerSearchChange}
      placeholder="Search a recipe"
    />
  );
};

export default InputSearchRecipes;