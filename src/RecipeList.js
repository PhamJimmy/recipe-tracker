import React from "react";
import Recipe from "./Recipe"

function RecipeList({ recipes, handleDelete }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  const content = recipes.map((recipe, index) => <Recipe key={index} recipe={recipe} index={index} handleDelete={() => handleDelete(index)} />);

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {content}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
