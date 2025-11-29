import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          {/* Centered Logo */}
          <div className={styles.logo}>
            <div className={styles.logoWrapper}>
              <div className={styles.logoTop}>
                <span className={styles.logoLine}></span>
                <span className={styles.logoYear}>EST. 2024</span>
                <span className={styles.logoLine}></span>
              </div>
              <h1 className={styles.logoText}>HANGOUT</h1>
              <div className={styles.logoUnderline}></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;