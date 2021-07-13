import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import { v4 as uuid4 } from "uuid";
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
    calories,
    totalTime,
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
    calories: "",
    totalTime: "",
  });

  const [click, setClick] = useState(false);

  const showModal = () => {
    setClick(!click);
  };

  const hideModal = () => {
    setClick(false);
  };

  return (
    <div key={uuid4()} className="food-recipe">
      <img
        src={image}
        alt={label}
        onError={(e) =>
          (e.target.src =
            "https://assets.materialup.com/uploads/b03b23aa-aa69-4657-aa5e-fa5fef2c76e8/preview.png")
        }
      />
      <div className="food-info">
        <h3>{label}</h3>
        <div className="view-recipe">
          <button
            className="btn-recipe"
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
                calories: calories,
                totalTime: totalTime,
              });
            }}
          >
            View Recipe
          </button>
        </div>
      </div>
      {Object.keys(data).length > 0 ? (
        <div key={uuid4()} className={click ? "modal active" : "modal"}>
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
