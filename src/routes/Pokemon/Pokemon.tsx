import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../components/Title/Title';
import PokemonEvolution from './PokemonEvolution';
import PokemonSprite from './PokemonSprite';

const Pokemon = () => {
  const { num } = useParams();
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const url = 'https://pokeapi.co/api/v2/pokemon/' + num;

  React.useEffect(() => {
    (async () => {
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
      <section>
        <Title text={data.name} />
        <PokemonSprite data={data} num={num} />
        <PokemonEvolution url={url} data={data} num={num} />
      </section>
    );
  } else {
    return null;
  }
};

export default Pokemon;
