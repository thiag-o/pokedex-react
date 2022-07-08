import React, { isValidElement } from 'react';
import { Navigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../useContext';
import styles from '../Register/Register.module.css';
import pokeball from '../../assets/pokeball.svg';

const Login = () => {
  const { isLogin, error, login, loading } = React.useContext(UserContext);
  if (isLogin) return <Navigate to="/conta" />;
  const user = useForm();
  const password = useForm();
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    login(user.value, password.value);
  }

  return (
    <>
      <Title text="Fazer Login" />
      <div className={styles.boxForm}>
        <form onSubmit={handleSubmit}>
          <Input name="Usuário" id="user" required {...user} />
          <Input
            name="Senha"
            id="password"
            type="password"
            required
            {...password}
          />
          <div className={styles.buttonGroup}>
            {loading ? (
              <button className={styles.button} type="submit" disabled>
                CARREGANDO...
              </button>
            ) : (
              <button className={styles.button} type="submit">
                FAZER LOGIN
              </button>
            )}

            <img className={styles.detail} src={pokeball} alt="pokeball" />
          </div>
        </form>
        {error && <p>Falha ao registrar</p>}
      </div>
    </>
  );
};

export default Login;
