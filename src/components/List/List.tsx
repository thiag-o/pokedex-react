import React from 'react';
import Card from '../Card/Card';
import styles from './List.module.css';
import { PokemonSimple } from '../../pokeutils/interfacePokemons';
import axios from 'axios';

interface Props {
  result: string;
}

const List = ({ result }: Props) => {
  const [infos, setInfos] = React.useState<Array<PokemonSimple> | null>(null);
  const [find, setFind] = React.useState<
    Array<PokemonSimple> | null | undefined
  >(null);

  React.useEffect(() => {
    if (result != '') {
      if (!isNaN(+result)) {
        setFind(infos?.filter((info, index) => index + 1 == +result));
      } else {
        setFind(infos?.filter((info) => info.name === result.toLowerCase()));
      }
    } else {
      setFind(null);
    }
  }, [result]);

  React.useEffect(() => {
    (async () => {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0',
      );
      setInfos(response.data.results);
      console.log(response);
    })();
  }, []);

  if (find?.length === 0)
    return <p className={styles.notFind}>Nenhum pokemon encontrado.</p>;

  if (find) {
    return (
      <div className={styles.list}>
        {find?.map(({ name, url }) => (
          <Card key={url} name={name} url={url} />
        ))}
      </div>
    );
  }

  if (infos) {
    return (
      <div className={styles.list}>
        {infos?.map(({ name, url }) => (
          <Card key={url} name={name} url={url} />
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default List;
