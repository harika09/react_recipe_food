import React, { useState } from "react";
import "./Details.css";

function RecipeDetails({ data }) {
  const {
    label,
    image,
    url,
    ingredients,
    healthLabels,
    serve,
    mealType,
    source,
    dietLabels,
    dishType,
  } = data;
  return (
    <div className="food-recipe-info">
      <h3>{label}</h3>
      <span> Source: {source}</span>

      <div className="food-serving">
        <div className="serving">
          <p>Servings</p>
          <span>{serve}</span>
        </div>
        <div className="serving">
          <p>Dish</p>
          <span>
            {Object.keys(dishType ?? {}).length > 0 ? (
              <p>{dishType}</p>
            ) : (
              "main course"
            )}
          </span>
        </div>
        <div className="serving">
          <p> Meal</p>
          <span>
            {Object.keys(mealType ?? {}).length > 0 ? (
              <p>{mealType}</p>
            ) : (
              "Lunch/Dinner"
            )}
          </span>
        </div>
      </div>

      <div className="ingredients">
        <strong>Ingredients</strong>
        <ul>
          {ingredients.map((ingre) => (
            <li>{ingre.text}</li>
          ))}
        </ul>
      </div>

      <div className="health-list">
        <strong>Health Benefits</strong>
        {healthLabels.map((health) => (
          <li>{health}</li>
        ))}
      </div>
    </div>
  );
}

export default RecipeDetails;
