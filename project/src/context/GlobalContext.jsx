import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favoriteLists, setFavoriteLists] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();

      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
      }
      console.log(data);
      console.log(recipeList);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  function handleAddToFavorites(getCurrentItem) {
    console.log(getCurrentItem);
    const copyFav = [...favoriteLists];
    const index = copyFav.findIndex((item) => item.id === getCurrentItem.id);
    if (index === -1) {
      copyFav.push(getCurrentItem);
    } else {
      copyFav.splice(index);
    }
    setFavoriteLists(copyFav);
  }
  console.log(favoriteLists, favoriteLists.length);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeDetails,
        setRecipeDetails,
        handleAddToFavorites,
        favoriteLists,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
