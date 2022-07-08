import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../components/Title/Title';
import PokemonEvolution from './PokemonEvolution/PokemonEvolution';
import PokemonSprite from './PokemonSprite/PokemonSprite';
import styles from './Pokemon.module.css';

const Pokemon = () => {
  const { num } = useParams();
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const url = 'https://pokeapi.co/api/v2/pokemon/' + num;

  React.useEffect(() => {
    (async () => {
      scroll(0, 0);
      setLoading(true);
      const response = (await axios.get(url)).data;
      setLoading(false);
      setData(response);
    })();
  }, [num]);

  if (loading) {
    return null;
  }
  if (data) {
    return (
      <section className={styles.pokemon}>
        <Title text={data.name} back={true} />
        <PokemonSprite data={data} num={num} />
        <PokemonEvolution url={url} data={data} num={num} />
      </section>
    );
  } else {
    return null;
  }
};

export default Pokemon;
