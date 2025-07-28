export default function Recipe({ recipe }) {
  if (!recipe) return null;

  return (
    <section>
      <h2>{recipe.name}</h2>
      {recipe.name !== 'No Match' ? (
        <>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3>Steps:</h3>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </>
      ) : (
        <p>{recipe.steps[0]}</p>
      )}
    </section>
  );
}
