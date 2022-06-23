import React, { useEffect } from 'react';
import styles from './Card.module.css';
import axios from 'axios';
import { images, colors } from './importTypes';
import Loading from '../Helper/Loading/Loading';
import { Link } from 'react-router-dom';

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

  function handleLoadingImgs() {}

  useEffect(() => {
    setLoading(true);
    (async () => {
      setTypes(null);
      const response = (await axios.get(url)).data.types;
      setTypes(response);
      setLoading(false);
    })();
  }, []);

  if (loading === true) {
    return <Loading />;
  }
  if (types !== null) {
    return (
      <Link to={`/pokemon/${numberurl}`} className={styles.card}>
        <div
          style={{ backgroundColor: colors[types[0].type.name] }}
          className={styles.cardHeader}
        >
          {name + ' - ' + id}
        </div>

        <div className={styles.image}>
          <img
            onLoad={handleLoadingImgs}
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`}
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
      </Link>
    );
  } else {
    return null;
  }
};

export default Card;
