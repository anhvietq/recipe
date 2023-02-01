import React, { useState } from "react";
import { BsClock, BsBook, BsPerson } from "react-icons/bs";

function Favorites({ recipes }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorite, setFavorite] = useState([]); // <= this state holds the id's of all favorite reciepies

// following function handles the operation of adding fav recipes's id's

  const addToFavorite = id => {
    if (!favorite.includes(id)) setFavorite(favorite.concat(id));
    console.log(id);
  };

// this one does the exact opposite, it removes the favorite recipe id's
  const removeFavorite = id => {
    let index = favorite.indexOf(id);
    console.log(index);
    let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
    setFavorite(temp);
  };

// this variable holds the list of favorite recipes, we will use it to render all the fav ecipes
  let findfavorite = recipes.filter(recipe => favorite.includes(recipe.id));

// filtered list of recipes
  let filtered = recipes.filter(recipe => {
    if (searchTerm === "") {
      return recipe;
    } else if (recipe.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return recipe;
    }
  });

  return (
    <div className="main">
      <div className="recipe__search">
        <input
          type="text"
          onChange={event => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="recipe-container">
        <div className="recipe__list">
          <h2>all recipes</h2>
          {filtered.map(recipe => {
            return (
              <div key={recipe.id} className="recipe__card">
                <img src={recipe.image} alt="foods" width={50} height={50} />
                <h2 className="recipe__card__title">{recipe.title}</h2>
                <h4 className="recipe__card__info">
                  <p>
                    <BsClock /> {recipe.time} <BsBook />{" "}
                    {recipe.ingredientsCount} <BsPerson />
                    {recipe.servings}
                  </p>
                </h4>
                <h4 className="recipe__card__desc">
                  {recipe.description.length < 100
                    ? `${recipe.description}`
                    : `${recipe.description.substring(0, 120)}...`}
                </h4>
                <button onClick={() => addToFavorite(recipe.id)}>
                  add to favorite
                </button>
              </div>
            );
          })}
        </div>

        <div className="favorite__list">
          <h2>favorite recipes</h2>
          {findfavorite.map(recipe => {
            return (
              <div key={recipe.id} className="recipe__card">
                <img src={recipe.image} alt="foods" width={50} height={50} />
                <h2 className="recipe__card__title">{recipe.title}</h2>
                <h4 className="recipe__card__info">
                  <p className="recipe__card__info--icon">
                    <BsClock /> {recipe.time} <BsBook />{" "}
                    {recipe.ingredientsCount} <BsPerson />
                    {recipe.servings}
                  </p>
                </h4>
                <h4 className="recipe__card__desc">
                  {recipe.description.length < 100
                    ? `${recipe.description}`
                    : `${recipe.description.substring(0, 120)}...`}
                </h4>
                <button onClick={() => removeFavorite(recipe.id)}>
                  remove favorite
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Favorites;