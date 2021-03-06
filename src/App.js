import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState([...RecipeData]);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  
  const createRecipe = (newRecipe) => {
    setRecipes((curRecipes) => [...curRecipes, newRecipe]);
  }

  const deleteRecipe = (indexToDel) => {
    setRecipes((currentRecipes) => currentRecipes.filter((recipe, index) => index !== indexToDel));
  }

  const updateRecipe = (newRecipeInfo) => {
    const [indexToUpdate, newRecipe] = newRecipeInfo;
    setRecipes((currentRecipes) => currentRecipes.map((recipe, index) => index === indexToUpdate ? newRecipe : recipe));
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} handleDelete={deleteRecipe} handleUpdate={updateRecipe} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
