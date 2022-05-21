import React from 'react';
import Title from '../Title/Title';
import styles from './Home.module.css';
import search from '../../assets/search.svg';
import List from '../List/List';
import axios from 'axios';

const Home = () => {
  const [data, setData] = React.useState<Array<object> | null | any>(null);

  React.useEffect(() => {
    (async () => {
      const response = await axios.get<Array<object> | null | any>(
        'https://pokeapi.co/api/v2/pokemon?limit=800&offset=0',
      );
      setData(response.data.results);
    })();
  }, []);
  return (
    <>
      <Title text="Home" />
      <form className={styles.search}>
        <input type="text" placeholder="Procure seu pokemon aqui..." />
        <button className={styles.buttonForm} type="submit">
          <img src={search} alt="buscar" />
        </button>
      </form>
      <List infos={data} />
    </>
  );
};

export default Home;
