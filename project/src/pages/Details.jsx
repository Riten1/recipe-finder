import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";

const Details = () => {
  const {
    recipeDetails,
    setRecipeDetails,
    handleAddToFavorites,
    favoriteLists,
  } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    async function getRecipeDetails() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const details = await res.json();

      console.log(details);

      if (details?.data) {
        setRecipeDetails(details?.data);
      }
    }
    getRecipeDetails();
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetails?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span>{recipeDetails?.recipe?.publisher}</span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetails?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorites(recipeDetails?.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
          >
            {favoriteLists.findIndex(
              (item) => item.id === recipeDetails?.recipe?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetails?.recipe?.ingredients.map((ingredient) => (
              <li>
                <span className="text-md text-gray-600">
                  -{ingredient.quantity} {ingredient.unit}{" "}
                </span>
                <span className="text-md text-gray-600">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
