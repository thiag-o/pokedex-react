import React from 'react';
import { Link } from 'react-router-dom';
import { GET_ALL_POKEMONS } from '../../Api';
import List from '../../components/List/List';
import Title from '../../components/Title/Title';
import { UserContext } from '../../useContext';
import styles from './User.module.css';

const User = () => {
  const { data, logout, loading, getPokemonsUser } =
    React.useContext(UserContext);
  const [pokefav, setPokefav] = React.useState(null);
  function handleLogout() {
    logout();
  }

  React.useEffect(() => {
    (async () => {
      const allpokemons = await GET_ALL_POKEMONS();
      const pokemonsUser = await getPokemonsUser();
      const newData = allpokemons.filter(
        (data: { url: string; name: string }) => {
          const url = data.url;
          const arrayUrl = url.split('/');
          const numberurl = arrayUrl[arrayUrl.length - 2];
          for (let pokemon in pokemonsUser) {
            if (pokemonsUser[pokemon] === numberurl) return data;
          }
        },
      );
      setPokefav(newData);
    })();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }
  if (data) {
    return (
      <>
        <Title text={data.name} back={true} />
        <div className={styles.buttonGroup}>
          <Link className={styles.button} to="/">
            Adicionar Pokemons
          </Link>
          <button onClick={handleLogout} className={styles.button}>
            Sair
          </button>
        </div>

        <List result="" infos={pokefav} />
      </>
    );
  } else return null;
};

export default User;
