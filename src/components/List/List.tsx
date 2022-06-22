import React from 'react';
import Card from '../Card/Card';
import styles from './List.module.css';
import { PokemonSimple } from '../../pokeapi/interfacePokemons';

interface Props {
  infos: Array<PokemonSimple> | null;
}

const List = ({ infos }: Props) => {
  React.useEffect(() => {});
  return (
    <div className={styles.list}>
      {infos?.map(({ name, url }) => (
        <Card key={url} name={name} url={url} />
      ))}
    </div>
  );
};

export default List;
