import React, { useEffect, useState } from 'react';

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
    <div>ListPage</div>
  )
}
