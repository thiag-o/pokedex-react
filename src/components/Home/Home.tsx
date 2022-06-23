import React, { FormEventHandler } from 'react';
import Title from '../Title/Title';
import styles from './Home.module.css';
import search from '../../assets/search.svg';
import List from '../List/List';
import axios from 'axios';
import { PokemonSimple } from '../../pokeapi/interfacePokemons';
import UseForm from '../../hooks/UseForm';

const Home = () => {
  const [find, setFind] = React.useState<string>('');
  const [result, setResult] = React.useState<string>('');
  function handleSubmit(event: any) {
    event.preventDefault();
    setResult(find);
  }

  return (
    <>
      <Title text="Home" />
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Procure seu pokemon aqui..."
          onChange={({ target }) => setFind(target.value)}
        />
        <button className={styles.buttonForm} type="submit">
          <img src={search} alt="buscar" />
        </button>
      </form>
      <List result={result} />
    </>
  );
};

export default Home;
