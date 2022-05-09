import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// params (stretch: history/location)

export default function DetailPage() {
  // state: ingredients, loading, params
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);
  const { id } = useParams();

  // fetch: based on elixir id
  useEffect(() => {
    async function fetchIngredients() {
      const res = await fetch(`https://wizard-world-api.herokuapp.com/Elixirs/${id}`);
      const results = await res.json();

      console.log(results);
    }

    fetchIngredients();
  }, []);

  // return: loading, map over ingredients
  return (
    <div>DetailPage</div>
  )
}
