import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import Cards from "./Cards";
import "./Home.css";

function Home() {
  const [recipeData, setRecipeData] = useState([]);
  const [foodName, setFoodName] = useState("");
  const [isloading, setLoading] = useState(false);

  // const APIKEY = "fc98226f66bfc678f6f2962d4ea5f8c6";
  // const ID = "ad36e776";

  const URL = `https://api.edamam.com/search?q=${foodName}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`;
  const loadData = async () => {
    const result = await Axios.get(URL);
    setRecipeData(result.data.hits);
    setLoading(false); /* disable loading when data loaded */

    if (result.data.hits.length === 0) {
      errorMessage();
      setLoading(false);
    }
  };
  const errorMessage = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No Recipe Found",
    });
  };

  const submit = (e) => {
    e.preventDefault();
    loadData();
    setFoodName("");
    setLoading(true); /* Enable loading when user submit */
  };

  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="top-content">
          <h1>Food Recipe</h1>

          <form onSubmit={submit}>
            <input
              type="text"
              name="food"
              className="search"
              placeholder="Enter Food Name"
              value={foodName}
              onChange={(e) => {
                setFoodName(e.target.value);
              }}
            />
            <button type="submit" className="btn-search">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>

        {isloading ? (
          <div className="loading-animation"></div>
        ) : (
          <div className="food-recipe-container">
            {recipeData.map((recipe) => (
              <Cards recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
