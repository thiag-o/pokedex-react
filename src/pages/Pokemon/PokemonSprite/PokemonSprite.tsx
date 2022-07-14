import React from 'react';
import styles from './PokemonSprite.module.css';
import { images } from '../../../pokeutils/importTypes';
import { DELETE_USER_POKEMONS, POST_USER_ADD_POKEMONS } from '../../../Api';
import { UserContext } from '../../../useContext';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/Helper/Image/Image';

interface Props {
  data: any;
  num: string | undefined;
}

const Pokemon = ({ data, num }: Props) => {
  const id = num?.padStart(3, '0');
  const { getPokemonsUser, getUserForLogin } = React.useContext(UserContext);
  const [isAdd, setIsAdd] = React.useState<boolean | null>(null);
  const [wasClick, setWasClick] = React.useState<boolean>(false);
  const token = localStorage.getItem('token');

  const navigate = useNavigate();

  React.useEffect(() => {
    async function loadingLogin() {
      const isLogin = await getUserForLogin(token);
      console.log(isLogin);
      if (isLogin) {
        let isPokemon = false;
        const pokemonsUser = await getPokemonsUser();
        for (let pokemon in pokemonsUser) {
          if (pokemonsUser[pokemon] === num) isPokemon = true;
        }
        setIsAdd(isPokemon);
      }
    }

    loadingLogin();
  }, []);

  async function handleAdd() {
    setWasClick(false);
    if (token && num) {
      setWasClick(true);
      const response = await POST_USER_ADD_POKEMONS(token, num);
      navigate('/conta');
    }
  }
  async function handleRemove() {
    setWasClick(false);
    if (token && num) {
      setWasClick(true);
      const response = await DELETE_USER_POKEMONS(token, num);
      navigate('/conta');
    }
  }

  if (data) {
    return (
      <>
        {isAdd === true ? (
          <button
            onClick={handleRemove}
            disabled={wasClick}
            className={styles.remove}
          >
            Remover Pokemon
          </button>
        ) : isAdd === false ? (
          <button
            onClick={handleAdd}
            disabled={wasClick}
            className={styles.add}
          >
            Adicionar Pokemon
          </button>
        ) : (
          <></>
        )}
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
