import styles from "../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <Link href="/" className={styles.header__nav__link}>
          Home
        </Link>
        <Link href="/posts" className={styles.header__nav__link}>
          All posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
