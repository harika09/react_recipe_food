import React from "react";
import { v4 as uuid4 } from "uuid";
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
    calories,
    totalTime,
  } = data;
  return (
    <div className="food-recipe-info">
      <h3>{label}</h3>
      <span> Source: {source}</span>

      <div className="food-serving">
        <div className="serving">
          <p>Servings</p>
          <span>
            <i className="fas fa-utensils"></i>
            {serve}
          </span>
        </div>

        <div className="serving">
          <p>Dish</p>
          <span>
            <i className="fas fa-concierge-bell"></i>
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
            <i className="fas fa-utensil-spoon"></i>
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
        <ul className="ingredient-list">
          {ingredients.map((ingre) => (
            <li key={uuid4()}>
              <span className="dot"></span>
              {ingre.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="health">
        <strong>Health Benefits</strong>
        <ul className="health-list">
          {healthLabels.map((health) => (
            <li key={uuid4()}>
              <span className="dot"></span>
              {health}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecipeDetails;
