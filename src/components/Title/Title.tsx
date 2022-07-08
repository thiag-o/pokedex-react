import styles from './Title.module.css';
import pikachu from '../../assets/pikachu.svg';

interface props {
  text: string;
  img?: boolean;
  back?: boolean;
}

const Title = ({ text, img, back }: props) => {
  function handleTeste() {
    window.history.back();
  }

  return (
    <section className={img ? styles.sectionTitle : styles.sectionTitleMin}>
      <h1 className={styles.t1}>
        {' '}
        {back && (
          <button className={styles.button} onClick={handleTeste}>
            {'<'}
          </button>
        )}{' '}
        {text}
      </h1>
      {img && (
        <div className={styles.detail}>
          <img src={pikachu} className={styles.svg} />
        </div>
      )}
    </section>
  );
};

export default Title;
