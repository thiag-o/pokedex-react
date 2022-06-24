import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../components/Title/Title';
import styles from './Pokemon.module.css';
import { images, colors } from '../../pokeutils/importTypes';

const Pokemon = () => {
  const { num } = useParams();
  const [data, setData] = React.useState<any>(null);
  const url = 'https://pokeapi.co/api/v2/pokemon/' + num;
  const id = num?.padStart(3, '0');

  React.useEffect(() => {
    (async () => {
      const response = (await axios.get(url)).data;
      setData(response);
      console.log(response);
    })();
  }, [num]);

  if (data) {
    return (
      <section>
        <Title text={data.name} />
        <div className={styles.galery}>
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`}
            alt={data.name}
          />
          <div className={styles.sprites}>
            <img src={data.sprites.front_default} />
            <img src={data.sprites.back_default} />
          </div>
          <div className={styles.sprites}>
            <img src={data.sprites.front_shiny} />
            <img src={data.sprites.back_shiny} />
          </div>
          <div className={styles.type}>
            {data?.types.map((types: any) => (
              <div key={types.type.url}>
                <h3>
                  <img src={images[types.type.name]} />
                  {types.type.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Pokemon;
