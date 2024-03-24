import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import RecipeItem from "../components/RecipeItem";
import { useId } from "react";

const Favorites = () => {
  const id = useId();
  const { favoriteLists, loading } = useContext(GlobalContext);
  return (
    <div
      className="py-8 container mx-auto flex flex-wrap justify-center gap-10"
      key={id}
    >
      {favoriteLists && favoriteLists.length > 0 ? (
        favoriteLists.map((item) => <RecipeItem item={item} id={item.id} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
