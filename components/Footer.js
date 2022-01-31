import styles from "../styles/Footer.module.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://www.linkedin.com/in/lucas-tamaya-41a09621b/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/LucasTamaya">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </footer>
  );
};

export default Footer;
