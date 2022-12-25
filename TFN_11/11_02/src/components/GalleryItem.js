import React, { useState } from 'react';

export default function GalleryItem({ meal }) {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <div key={meal.idMeal} className={isClicked ? "showcase-item" : "showcase-details"} onClick={() => setIsClicked(!isClicked)}>
      <img src={meal.strMealThumb} alt={meal.strMeal}></img>
      <p>{meal.strMeal}</p>
      {isClicked ? "" : <div>
        <p>{meal.strInstructions}</p>
      </div>}
    </div>
  );
}


