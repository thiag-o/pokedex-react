import React from 'react';
import Title from '../../components/Title/Title';
import styles from './Home.module.css';
import search from '../../assets/search.svg';
import List from '../../components/List/List';

const Home = () => {
  const [find, setFind] = React.useState<string>('');
  const [result, setResult] = React.useState<string>('');
  function handleSubmit(event: any) {
    event.preventDefault();
    setResult(find);
  }

  return (
    <section className={styles.home}>
      <Title text="Home" img={true} />
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Procure seu pokemon aqui..."
          onChange={({ target }) => setFind(target.value)}
        />
        <button className={styles.buttonForm} type="submit">
          <img src={search} alt="buscar" />
        </button>
      </form>
      <List result={result} />
    </section>
  );
};

export default Home;
