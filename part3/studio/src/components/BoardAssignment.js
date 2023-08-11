import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{label: "No Boards Yet", value: "No Boards Yet"},{label: "Pasta Dishes", value: "Pasta"}, {label: "Lobster Dishes", value: "Lobster"},{label: "Seafood Dishes", value: "Seafood"} ];

   const [boardName, setBoardName] = useState("No Boards Yet");

   const handleChange = (event) => {

      setBoardName(event.target.value);

   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} selected onChange={handleChange}>
      {boards.map((board) => (
            <option value={board.value}>{board.label}</option>
         ))}
      </select>
         
      <p>Saved to {boardName}!</p>
      </div>
   );
}