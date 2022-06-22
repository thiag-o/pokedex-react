import React, { useEffect } from 'react';
import styles from './Card.module.css';
import axios from 'axios';
import { images, colors } from './importTypes';

interface Props {
  url: string;
  name: string;
}

interface Types {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

const Card = ({ url, name }: Props) => {
  const [types, setTypes] = React.useState<Array<Types> | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const arrayUrl = url.split('/');
  const numberurl = arrayUrl[arrayUrl.length - 2];
  const id = numberurl.padStart(3, '0');

  useEffect(() => {
    setLoading(true);
    (async () => {
      setTypes(null);
      const response = (await axios.get(url)).data.types;
      setTypes(response);
      setLoading(false);
      console.log(Array.isArray(response));
    })();
  }, []);
  // console.log(types[0]);

  if (loading === true) {
    return <p>Carregando...</p>;
  } else if (types !== null) {
    return (
      <div className={styles.card}>
        <div
          style={{ backgroundColor: colors[types[0].type.name] }}
          className={styles.cardHeader}
        >
          {name + ' - ' + id}
        </div>

        <div className={styles.image}>
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`}
            alt=""
          />
        </div>
        <div className={styles.cardFooter}>
          <ul className={styles.types}>
            {types.map(({ type }: any) => (
              <li className={styles.type} key={type.name}>
                {type.name && (
                  <>
                    <img src={images[type.name]} alt="" />
                    <p>{type.name}</p>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    return <p>Errooooo</p>;
  }
};

export default Card;
