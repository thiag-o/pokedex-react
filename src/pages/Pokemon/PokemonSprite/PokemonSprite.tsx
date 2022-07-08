import React from 'react';
import styles from './PokemonSprite.module.css';
import { images } from '../../../pokeutils/importTypes';
import { DELETE_USER_POKEMONS, POST_USER_ADD_POKEMONS } from '../../../Api';
import { UserContext } from '../../../useContext';
import { useNavigate } from 'react-router-dom';

interface Props {
  data: any;
  num: string | undefined;
}

const Pokemon = ({ data, num }: Props) => {
  const id = num?.padStart(3, '0');
  const { isLogin, getPokemonsUser } = React.useContext(UserContext);
  const [isAdd, setIsAdd] = React.useState<boolean | null>(null);

  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      if (isLogin) {
        let isPokemon = false;
        const pokemonsUser = await getPokemonsUser();
        for (let pokemon in pokemonsUser) {
          if (pokemonsUser[pokemon] === num) isPokemon = true;
        }
        setIsAdd(isPokemon);
      }
    })();
  }, []);

  async function handleAdd() {
    if (isLogin) {
      const token = localStorage.getItem('token');
      if (token && num) {
        const response = await POST_USER_ADD_POKEMONS(token, num);
        navigate('/conta');
      }
    }
  }
  async function handleRemove() {
    if (isLogin) {
      const token = localStorage.getItem('token');
      if (token && num) {
        const response = await DELETE_USER_POKEMONS(token, num);
        navigate('/conta');
      }
    }
  }

  if (data) {
    return (
      <>
        {isAdd === true ? (
          <button onClick={handleRemove} className={styles.remove}>
            Remover Pokemon
          </button>
        ) : isAdd === false ? (
          <button onClick={handleAdd} className={styles.add}>
            Adicionar Pokemon
          </button>
        ) : (
          <></>
        )}
        {/* <button onClick={handleAdd} className={styles.add}>
          Adicionar Pokemon
        </button> */}
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
      </>
    );
  } else {
    return null;
  }
};

export default Pokemon;
