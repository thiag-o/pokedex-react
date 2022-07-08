import React from 'react';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import styles from './Register.module.css';
import pokeball from '../../assets/pokeball.svg';
import useForm from '../../hooks/useForm';
import { REGISTER_POST } from '../../Api';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../useContext';

const Register = () => {
  const user = useForm();
  const email = useForm();
  const password = useForm();
  const name = useForm();

  // const navigate = useNavigate();
  const { register, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    await register(user.value, name.value, password.value, email.value);
  }

  return (
    <>
      <Title text="Registrar" />
      <div className={styles.boxForm}>
        <form onSubmit={handleSubmit}>
          <Input name="Nome" id="name" type="text" required {...name} />
          <Input name="Usuário" id="user" required {...user} />
          <Input name="Email" id="email" type="email" required {...email} />
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
                REGISTRAR
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

export default Register;
