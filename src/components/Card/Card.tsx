import React, { useEffect } from 'react';
import styles from './Card.module.css';
import axios from 'axios';
import { images, colors } from '../../pokeutils/importTypes';
import Loading from '../Helper/Loading/LoadingCard';
import { Link } from 'react-router-dom';
import Image from '../Helper/Image/Image';
interface Props {
  url: string;
  name: string;
  num?: string | undefined;
}

interface Types {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

const Card = ({ url, name, num }: Props) => {
  const [types, setTypes] = React.useState<Array<Types> | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const arrayUrl = url.split('/');
  let numberurl = arrayUrl[arrayUrl.length - 2];
  let id;
  if (num) {
    id = num.padStart(3, '0');
    numberurl = num;
  } else {
    id = numberurl.padStart(3, '0');
  }

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
    return <Loading otherClass={styles.loading} />;
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
          <Image
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`}
            alt={`pokemon${id}`}
          />
        </div>
        <div className={styles.cardFooter}>
          <ul className={styles.types}>
            {types.map(({ type }: any) => (
              <li className={styles.type} key={type.name}>
                {type.name && (
                  <>
                    <Image src={images[type.name]} alt="aa" />
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
