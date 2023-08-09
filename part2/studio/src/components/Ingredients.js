import recipedata from './recipe.json';

function IngredientList() {

    return (

      <div>
        <h2>Ingredients:</h2>
        {recipedata.map((data) => {

          return (

            <div key={data.name}>
              <h3>Peaches:</h3>
              {data.ingredientsPeaches.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>
              })}
              <h3>Batter:</h3>
              {data.ingredientsBatter.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>
              })}
            </div>
            
          )
        })}
      </div>

    );


 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 