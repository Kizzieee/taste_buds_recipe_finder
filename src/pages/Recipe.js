import React, { useContext } from "react";
import { RecipesContext } from "../context/RecipeContext";
import RecipeModal from "./RecipeModal";
import "./recipe.css";

const Recipe = () => {
  const { recipes, loading, error } = useContext(RecipesContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Recipe List</h2>

      <div className="grid-container recipes">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="card">
            <img
              src={recipe.image}
              className="card-img-top"
              alt={recipe.name}
            />
            <div className="card-body">
              <h5 className="recipe-name text-truncate">{recipe.name}</h5>
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-secondary">
                  <i className="bi bi-star-fill star"></i>
                  {recipe.rating} / ({recipe.reviewCount})
                </span>
                <button
                  type="button"
                  className="btn-view"
                  data-bs-toggle="modal"
                  data-bs-target={`#recipeModal${recipe.id}`}
                >
                  <i className="bi bi-book"></i>{" "}
                  <span className="ps-1">View</span>
                </button>
              </div>
            </div>

            {/* Modal */}
            <RecipeModal
              id={`recipeModal${recipe.id}`}
              name={recipe.name}
              image={recipe.image}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
              rating={recipe.rating}
              reviewCount = {recipe.reviewCount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
