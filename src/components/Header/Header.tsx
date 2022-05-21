import React from 'react';
import pokeball from '../../assets/pokeball.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="" className={styles.logo}>
        <img src={pokeball} alt="pokeball" />
      </a>
      <ul className={styles.menu}>
        <li>
          <a href="" className={styles.buttonSecundary}>
            LOGIN
          </a>
        </li>
        <li>
          <a href="" className={styles.buttonPrimary}>
            REGISTRAR
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
