import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Created by Thiago Borges Mansano © 2022{' '}
        <a href="https://github.com/thiag-o" target="_blank">
          {' '}
          github/thiag-o
        </a>
      </p>
    </footer>
  );
};

export default Footer;
