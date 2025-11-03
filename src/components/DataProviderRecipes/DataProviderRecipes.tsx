import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";

export interface Recipe {
  id: number;
  name: string;
  image: string;
  servings: number;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  ingredients: string[];
  instructions: string[];
  rating: number;
}
interface DataProviderProps {
  children: React.ReactNode;
}
interface DataContextType {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const DataContext = createContext<DataContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
    export const useData = () => {
  const context = useContext(DataContext) as DataContextType;

  if (!context) {
    throw new Error("useData deve ser usado dentro de um DataProviderRecipes");
  }
  return context;
};

export default function DataProviderRecipes({ children }: DataProviderProps) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");

  async function fetchInitialRecipes() {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setRecipes(json.recipes);
      setError(null);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Erro desconhecido ao buscar receitas";
      setError(`Recipes could not be found: ${errorMessage}`);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInitialRecipes();
  }, []);

  const contextValue = useMemo(
    () => ({
      recipes,
      loading,
      error,
      search,
      setSearch,
    }),
    [recipes, loading, error, search]
  );

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}
