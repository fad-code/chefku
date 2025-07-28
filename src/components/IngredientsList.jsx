export default function IngredientsList({ ingredients, getRecipe }) {
    const ingredientsListItems = ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ));

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
                {ingredientsListItems}
            </ul>

            {ingredients.length >= 4 && (
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={getRecipe}>Get a recipe</button>
                </div>
            )}
        </section>
    );
}
