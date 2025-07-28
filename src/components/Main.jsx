import React, { useState } from 'react';
import IngredientsList from './IngredientsList.jsx';
import Recipe from './Recipe.jsx';
import { recipes } from './recipes.js';

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState(null);

  const addIngredient = (e) => {
    e.preventDefault();
    const ingredient = e.target.ingredient.value.trim().toLowerCase();
    if (!ingredient) return;
    setIngredients(prev => [...prev, ingredient]);
    e.target.reset();
  };

  const getRecipe = () => {
    if (ingredients.length < 4) {
      alert('Please add at least 4 ingredients!');
      return;
    }

    const match = recipes.find(r => {
      const matchCount = r.ingredients.filter(ing =>
        ingredients.includes(ing.toLowerCase())
      ).length;
      return matchCount >= 2; // At least 2 matches
    });

    setRecipe(match || { name: 'No Match', ingredients: [], steps: ['Try different ingredients!'] });
  };

  const reset = () => {
    setIngredients([]);
    setRecipe(null);
  };

  return (
    <main>
      {!recipe && (
        <>
          <form onSubmit={addIngredient} className="add-ingredient-form">
            <input name="ingredient" placeholder="Enter an ingredient" />
            <button type="submit">Add</button>
          </form>

          {ingredients.length > 0 && (
            <>
              <IngredientsList ingredients={ingredients} />
              <div className="get-recipe-container">
                <div>
                  <h3>Go Cook Your Meal !!</h3>
                </div>
                <button onClick={getRecipe}>Get Recipe</button>
              </div>
            </>
          )}
        </>
      )}

      {recipe && (
        <div className="suggested-recipe-container">
          <Recipe recipe={recipe} />
          <button onClick={reset} style={{
            marginTop: '20px',
            padding: '10px 15px',
            background: '#141413',
            color: '#fff',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            Get a new recipe
          </button>
        </div>
      )}
    </main>
  );
}
