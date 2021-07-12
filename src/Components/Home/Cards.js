import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import "./Cards.css";

function Cards({ recipe }) {
  const {
    label,
    source,
    image,
    url,
    ingredients,
    healthLabels,
    mealType,
    dietLabels,
    dishType,
  } = recipe.recipe;
  const [data, setData] = useState({
    label: "",
    image: "",
    url: "",
    ingredients: [],
    healthLabels: [],
    serve: "",
    mealType: "",
    source: "",
    dietLabels: "",
    dishType: "",
  });

  const [click, setClick] = useState(false);

  const showModal = () => {
    setClick(!click);
  };

  const hideModal = () => {
    setClick(false);
  };

  return (
    <div className="food-recipe">
      <img src={recipe.recipe.image} alt={recipe.recipe.image} />
      <div className="food-info">
        <h3>{label}</h3>
        <div className="view-recipe">
          <button
            onClick={() => {
              showModal();
              setData({
                label: label,
                image: image,
                url: url,
                ingredients: ingredients,
                healthLabels: healthLabels,
                serve: recipe.recipe.yield,
                mealType: mealType,
                source: source,
                dietLabels: dietLabels,
                dishType: dishType,
              });
            }}
          >
            View Recipe
          </button>
        </div>
      </div>
      {Object.keys(data).length > 0 ? (
        <div className={click ? "modal active" : "modal"}>
          <div className="modal-content">
            <span className="close" onClick={hideModal}>
              &times;
            </span>
            <RecipeDetails data={data} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Cards;
