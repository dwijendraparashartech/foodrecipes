import React from "react";

const Recipes = props => {
  const {recipes} =props;
  return (
    <div class="row">
      {recipes.map(recipe =>(
        <div className="col-sm-3">
          <div className="card">
         <div className="card-body">
           <h4>{recipe.recipe.label}</h4>
      </div>
      </div>
    </div>
      ))}
      </div>
  );
}

export default Recipes;