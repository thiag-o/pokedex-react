import React from 'react';
import pokeball from '../../assets/pokeball.svg';
import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import useMedia from '../../hooks/useMedia';
import Menu from '../../assets/menu.svg';

const Header = () => {
  const isMobile = useMedia('(max-width:800px)');
  const [mobileMenu, setMobileMenu] = React.useState<boolean>(false);
  const { pathname } = useLocation();

  // React.useEffect(() => {
  //   if (!isMobile) {
  //     setMobileMenu(false);
  //   }
  // }, [isMobile]);

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={pokeball} alt="pokeball" />
      </Link>
      <div>
        {isMobile && (
          <button
            aria-label="Menu-button"
            aria-expanded={mobileMenu}
            onClick={() => setMobileMenu(!mobileMenu)}
            className={`${styles.buttonMenu} ${
              mobileMenu ? styles.active : ''
            }`}
          >
            <img src={Menu} alt="menu hamburguer" />
          </button>
        )}

        <nav
          className={`${isMobile ? styles.menuMobile : styles.menu} ${
            mobileMenu ? styles.active : ''
          }`}
        >
          <a href="" className={styles.buttonSecundary}>
            LOGIN
          </a>

          <a href="" className={styles.buttonPrimary}>
            REGISTRAR
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
