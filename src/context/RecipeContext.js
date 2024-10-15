import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const RecipesContext = createContext();

// Create a provider component
export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the recipes from the API
    fetch('https://dummyjson.com/recipes')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch recipes');
        }
        return res.json();
      })
      .then((data) => {
        setRecipes(data.recipes); // Assuming the API returns an object with a 'recipes' array
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <RecipesContext.Provider value={{ recipes, loading, error }}>
      {children}
    </RecipesContext.Provider>
  );
};
