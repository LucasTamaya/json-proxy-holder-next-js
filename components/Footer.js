import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://www.linkedin.com/in/lucas-tamaya-41a09621b/">
        <i className={`fab fa-linkedin ${styles.footer__icon}`}></i>
      </a>
      <a href="https://github.com/LucasTamaya">
        <i className={`fab fa-github ${styles.footer__icon}`}></i>
      </a>
    </footer>
  );
};

export default Footer;
