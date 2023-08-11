import { useState } from 'react';

export default function StatusChange () {

   const [notes, setNotes] = useState("");
   const [recipeStatus, setRecipeStatus] = useState(false);

   const handleChange = (event) => {
      setNotes(event.target.value);
   }

   const handleSubmit = (event) => {

      event.preventDefault();
      let currentNotes = notes.toLocaleLowerCase(); 

      if (currentNotes.includes("no") || currentNotes.includes("i have not")){

         setRecipeStatus(false);

      } else if (currentNotes.includes("yes") || currentNotes.includes("i have")) {

         setRecipeStatus(true);

      } else {

         setRecipeStatus(false);
         
      }
      
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>
         <p>I {recipeStatus ? "have" : "have not"} tried this recipe</p>
      </div>
   );
}