import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_USER, GET_USER_POKEMONS, LOGIN_POST, REGISTER_POST } from './Api';

interface Props {
  children: JSX.Element;
}

export const UserContext = React.createContext<null | any>(null);

export const UserStorage = ({ children }: Props) => {
  const [data, setData] = React.useState<null | any>(null);
  const [isLogin, setIsLogin] = React.useState<boolean | null>(null);
  const [error, setError] = React.useState<null | string>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [pokemonsFav, setPokemonsFav] = React.useState<string[] | null>(null);

  const navigate = useNavigate();

  async function getUserForLogin(token: string) {
    setError(null);
    try {
      const response = await GET_USER(token);
      if (response.status === 200) {
        return true;
      }
      if (response.status === 204) {
        return false;
      }
    } catch (err) {
      setError('true');
      return false;
    }
  }

  async function getUser(token: string) {
    setError(null);
    setLoading(true);
    try {
      const response = await GET_USER(token);
      // console.log(response);
      if (response.status === 200) {
        setIsLogin(true);
        setData(response.data.user);
      }
      if (response.status === 204) {
        setData(null);
        // localStorage.removeItem('token');
        setError('Sessão expirada, faça login novamente.');
        navigate('/login');
      }
    } catch (err) {
      setIsLogin(false);
      setData(null);
      setError('Erro no servidor');
    } finally {
      setLoading(false);
    }
  }

  async function register(
    username: string,
    name: string,
    password: string,
    email: string,
  ) {
    setLoading(true);
    setError(null);
    try {
      const response = await REGISTER_POST({
        username,
        name,
        password,
        email,
      });

      if (response.status === 201) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        setIsLogin(true);
        getUser(token);
        navigate('/conta');
        return true;
      }
    } catch (err) {
      setError('Falha ao se registrar.');
    } finally {
      setLoading(false);
    }
  }

  async function login(username: string, password: string) {
    setLoading(true);
    setError(null);
    try {
      const response = await LOGIN_POST({
        username,
        password,
      });
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        setIsLogin(true);
        getUser(token);
        navigate('/conta');
        return true;
      }
    } catch (err: any) {
      if (err.response.status === 401) {
        setError('Usuário ou senha invalidos.');
        return false;
      }
      return false;
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setData(null);
    setIsLogin(false);
    setError(null);
    localStorage.removeItem('token');
    navigate('/');
  }

  async function getPokemonsUser() {
    setError(null);
    try {
      const token = localStorage.getItem('token');
      if (token) {
        let userFav = (await GET_USER_POKEMONS(token)).data.pokemons;
        if (userFav.includes(',')) {
          userFav = userFav.split(',');
        } else {
          userFav = [userFav];
        }
        setPokemonsFav(userFav);
        return userFav;
      }
    } catch (err) {
      setError('Erro no servidor');
      return false;
    }
  }

  React.useEffect(() => {
    async function userConnect() {
      const token = localStorage.getItem('token');
      if (token) {
        await getUser(token);
      }
    }
    userConnect();
  }, []);

  return (
    <UserContext.Provider
      value={{
        data,
        isLogin,
        register,
        error,
        setError,
        login,
        loading,
        logout,
        getPokemonsUser,
        pokemonsFav,
        getUserForLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
