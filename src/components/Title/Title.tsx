import React from 'react';
import styles from './Title.module.css';
import pikachu from '../../assets/pikachu.svg';
import { Link } from 'react-router-dom';

interface props {
  text: string;
  img?: boolean;
}

const Title = ({ text, img }: props) => {
  return (
    <section className={img ? styles.sectionTitle : styles.sectionTitleMin}>
      <h1 className={styles.t1}>
        {' '}
        {!img && <Link to="/">{'<'}</Link>} {text}
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
