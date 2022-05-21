import React from 'react';
import styles from './Title.module.css';
import pikachu from '../../assets/pikachu.svg';

interface props {
  text: string;
}

const Title = ({ text }: props) => {
  return (
    <section className={styles.sectionTitle}>
      <h1 className={styles.t1}>{text}</h1>
      <div className={styles.detail}>
        <img src={pikachu} className={styles.svg} />
      </div>
    </section>
  );
};

export default Title;
