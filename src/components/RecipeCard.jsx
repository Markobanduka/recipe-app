import { Heart, HeartPulse, Soup } from "lucide-react";
import React, { useState, useEffect } from "react";

const getTwoValuesFromArray = (arr) => [arr[0], arr[1]];

const RecipeCard = ({ recipe, bg, badge, onUpdateFavorites }) => {
  const healthLabels = getTwoValuesFromArray(recipe.healthLabels);

  const [isFavorite, setIsFavorite] = useState(false);

  // inicijalizacija stanja iz localStorage
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.some(fav => fav.label === recipe.label));
  }, [recipe.label]);

  const toggleFavorite = (e) => {
    e.preventDefault();
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter(fav => fav.label !== recipe.label);
      setIsFavorite(false);
    } else {
      updatedFavorites = [...favorites, recipe];
      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    // update parent state (FavoritesPage)
    if (onUpdateFavorites) {
      onUpdateFavorites(updatedFavorites);
    }
  };

  return (
    <div data-test="recipe-card" className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}>
      <a
        href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
        target="_blank"
        className="relative h-32"
      >
        <div className="skeleton absolute inset-0" />
        <img
          data-test="card-image"
          src={recipe.image}
          alt=""
          className="rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500"
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1;
            e.currentTarget.previousElementSibling.style.display = "none";
          }}
        />
      </a>

      <div
        className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer"
        onClick={toggleFavorite}
      >
        {!isFavorite ? (
          <Heart data-test="white-heart-icon" size={20} className="hover:fill-red-500 hover:text-red-500" />
        ) : (
          <Heart data-test="red-heart-icon" size={20} className="fill-red-500 text-red-500" />
        )}
      </div>

      <div>
        <p data-test="recipe-name" className="font-bold tracking-wide">{recipe.label}</p>
      </div>
      <p data-test="cuisine-type" className="my-2">
        {recipe.cuisineType[0].charAt(0).toUpperCase() + recipe.cuisineType[0].slice(1)} Kitchen
      </p>
      <div className="flex gap-2 mt-auto">
        {healthLabels.map((label, index) => (
          <div key={index} className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
            <HeartPulse data-test="heart-pulse-icon" size={16} />
            <span data-test="health-label" className="text-sm tracking-tighter font-semibold">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;
