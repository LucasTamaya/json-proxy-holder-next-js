import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className={styles.home}>
        <h1 className={styles.home__tile}>
          This is a simple app where you can get data from a JSON proxy holder!
        </h1>

        <div className={styles.home__links}>
          <Link href="/posts">
            <button className={styles.home__links__button}>See all posts</button>
          </Link>

          <a
            href="https://github.com/LucasTamaya/JsonProxyHolder"
          >
            <button className={styles.home__links__button}>See on GitHub</button>
          </a>
        </div>
      </main>
    </>
  );
}
