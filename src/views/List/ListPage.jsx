import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ListPage() {
  // list elixirs (name, effect, possible side effect), link to ingredient detail page, (stretch: color code difficulty)
  const [loading, setLoading] = useState(true);
  const [elixirs, setElixirs] = useState([]);

  useEffect(() => {
    async function fetchElixirs() {
      const res = await fetch('https://wizard-world-api.herokuapp.com/Elixirs');
      const results = await res.json();

      console.log(results);
      setElixirs(results);
      setLoading(false);
    }

    fetchElixirs();
  }, []);

  return (
    <>
      <h1>Elixirs</h1>
      {loading ? (
        <figure>
          <img
            src='./cauldron_spinner.gif'
            alt='green bubbling liquid in purple cauldron'/>
          <figcaption>Loading...</figcaption>
        </figure>
      ) : (
        <section>
          {elixirs.map((elixir) => (
            <article key={elixir.name}>
              <h2>{elixir.name}</h2>
              <p>{elixir.effect}</p>
              <p>{elixir.sideEffects}</p>
              <Link to={`ingredients/${elixir.name}`}>
                <p>Ingredients...</p>
              </Link>
            </article>
          ))}
        </section>
      )}
    </>
  )
}
