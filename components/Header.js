import styles from "../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <Link href="/">
          Home
        </Link>
        <Link href="/posts">
          All posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
