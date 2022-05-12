import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './List.css';

export default function ListPage() {
  // list elixirs (name, effect, possible side effect), link to ingredient detail page, (stretch: color code difficulty)
  const [loading, setLoading] = useState(true);
  const [elixirs, setElixirs] = useState([]);

  useEffect(() => {
    async function fetchElixirs() {
      const res = await fetch('https://wizard-world-api.herokuapp.com/Elixirs');
      const results = await res.json();

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
            <article key={elixir.id} className={style[elixir.difficulty.toLowerCase()]}>
              <h2>{elixir.name}</h2>
              <p>Effects: {elixir.effect}</p>
              <p>Possible Side Effects: {elixir.sideEffects}</p>
              <Link to={`ingredients/${elixir.id}`}>
                <p>Ingredients...</p>
              </Link>
            </article>
          ))}
        </section>
      )}
    </>
  )
}
