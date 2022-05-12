import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// params (stretch: history/location)

export default function DetailPage() {
  // state: ingredients, loading, params
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);
  const { name } = useParams();

  // fetch: based on elixir name
  useEffect(() => {
    async function fetchIngredients() {
      const res = await fetch(`https://wizard-world-api.herokuapp.com/Elixirs/${name}`);
      const results = await res.json();

      console.log(results);

      const ingredientInfo = results.ingredients.map((ingredient) => ({
        id: ingredient.id,
        name: ingredient.name
      }));

      setIngredients(ingredientInfo);
      setLoading(false);
    }

    fetchIngredients();
  }, []);

  // return: loading, map over ingredients
  return (
    <>
      <h1>Elixirs</h1>
      {loading ? (
        <figure>
          <img
            src='../cauldron_spinner.gif'
            alt='green bubbling liquid in purple cauldron'/>
          <figcaption>Loading...</figcaption>
        </figure>
      ) : (
        <ul>
          {ingredients.map((ingredient) => {
            return (
              
              <li key={ingredient.id}>
                {ingredient.name}
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}
