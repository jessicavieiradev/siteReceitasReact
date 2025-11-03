import InputSearchRecipes from "../InputSearchRecipes/InputSearchRecipes";
import ReactPaginate from "react-paginate";
import RecipesCard from "../RecipesCard/RecipesCard";
import Title from "../Title/Title";
import { useData } from "../DataProviderRecipes/DataProviderRecipes";
import React, { useCallback, useMemo, useState } from "react";
import styles from "./Recipes.module.css";

interface PageChangeData {
  selected: number;
}

const Recipes = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const recipesPerPage = 8;

  const { search, recipes, setSearch } = useData();

  const filtredRecipes = useMemo(() => {
    if (search === "") {
      return recipes;
    }
    const searchTerm: string = search.toLowerCase();
    return recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(searchTerm);
    });
  }, [recipes, search]);

  const pagesVisited = pageNumber * recipesPerPage;
  const displayRecipes = filtredRecipes
    .slice(pagesVisited, pagesVisited + recipesPerPage)
    .map((recipe) => {
      return <RecipesCard key={recipe.id} recipe={recipe} />;
    });
  
  const pageCount = Math.ceil(filtredRecipes.length / recipesPerPage);

  const changePage = ({ selected }: PageChangeData) => {
    setPageNumber(selected);
  };

  const handlerSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPageNumber(0);
  }, [setSearch, setPageNumber]);

  return (
    <section className="container mx-auto mt-24 md:mt-40 space-y-8 md:space-y-16 flex flex-col items-center">
      <Title className="text-3xl md:text-4xl text-center">
        Explore our recipes
      </Title>
      <InputSearchRecipes handlerSearchChange={handlerSearchChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {displayRecipes}
        {filtredRecipes.length === 0 && search !== "" && (
          <p>Sorry, we don't find this recipe.</p>
        )}

        
      </div>
      <div>
        {filtredRecipes.length > recipesPerPage && (
          <ReactPaginate
            previousAriaLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={styles.paginationBttns}
            previousLinkClassName={styles.previousBttns}
            nextLinkClassName={styles.nextBttn}
            disabledClassName={styles.paginationDisabled}
            activeClassName={styles.paginationActive}
            forcePage={pageNumber}
          />
        )}
      </div>
    </section>
  );
};

export default Recipes;