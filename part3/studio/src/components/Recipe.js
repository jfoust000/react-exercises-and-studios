const RecipeAuthor = () => {
   let authorLink = "https://www.bonappetit.com/contributor/amiel-stanek";
   let authorPhoto = "https://assets.bonappetit.com/photos/5d001f309ffc67792fc6f7ed/1:1/w_320,c_limit/Ba_Staff_Portrait_Amiel.jpg";
   let authorName = "Amiel Stanek";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>{authorLink}</a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Kosher salt", "2 1½-lb. live lobsters", 
   "1 medium onion, coarsely chopped", "2 celery stalks, trimmed, coarsely chopped", "3 garlic cloves, peeled, smashed"];

   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {

   let recipeTitle = "Lobster Pasta";
   let recipeDescription = "This recipe is no small amount of work, so be sure to make it for the people you really, really like. The pro move is to break up the process over two days—that means cooking the lobsters, picking the meat, and infusing the cream on the first day, which leaves cooking the pasta and heating everything back up to serve on the second. And no, you can't just buy already picked lobster meat; you need the shells to infuse the sauce with tons of flavor. You can, however, ask your fishmonger to steam the lobsters for you, which many will do for free if you ask. No judgie.";

   return (
      <div> 
         <div>
            <h1>{recipeTitle}</h1>
            <p>{recipeDescription}</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://assets.bonappetit.com/photos/5de7e495b79e20000879d72a/1:1/w_1920,c_limit/Amiel-Lobster-Pasta-Lede-1.jpg" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}