import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Created by Thiago Borges © 2022{' '}
        <a href="https://github.com/thiagodevss" target="_blank">
          {' '}
          github/thiagodevss
        </a>
      </p>
    </footer>
  );
};

export default Footer;
