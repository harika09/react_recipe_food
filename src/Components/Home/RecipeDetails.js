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
  } = data;
  return (
    <div className="food-recipe-info">
      <h3>{label}</h3>
      <span> Source: {source}</span>
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
