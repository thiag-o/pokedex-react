import React from 'react';
import Title from '../../components/Title/Title';
import styles from './Home.module.css';
import search from '../../assets/search.svg';
import List from '../../components/List/List';
import { PokemonSimple } from '../../pokeutils/interfacePokemons';
import axios from 'axios';


const Home = () => {
  const [find, setFind] = React.useState<string>('');
  const [result, setResult] = React.useState<string>('');
  const [pokemons, setPokemons] = React.useState<Array<PokemonSimple> | null>(
    null,
  );

  React.useEffect(() => {
    (async () => {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0',
      );
      setPokemons(response.data.results);
    })();
  }, []);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setResult(find);
  }

  return (
    <section className={styles.home}>
      <Title text="Home" img={true} />
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Procure pelo nome ou pelo numero."
          onChange={({ target }) => setFind(target.value)}
        />
        <button className={styles.buttonForm} type="submit">
          <img src={search} alt="buscar" />
        </button>
      </form>
      <List result={result} infos={pokemons} />
    </section>
  );
};

export default Home;
