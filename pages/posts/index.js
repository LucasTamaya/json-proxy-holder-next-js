import styles from "../../styles/AllPosts.module.css";
import Link from "next/link";

export const getServerSideProps = async (context) => {
  // fetch vers notre proxy
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};

const AllPosts = ({ data }) => {
  return (
    <main className={styles.all__posts}>
      <div>
        <h1 className={styles.card__container__title}>All posts!</h1>
        <div className={styles.card__container}>
          {data.map((x) => (
            // ici, cela va créer une url dynamique vers les commentaires du post sélectionné
            <Link href={`/posts/${x.id}`} key={x.id}>
              <div className={styles.card}>
                <h1 className={styles.card__title}>{x.title}</h1>
                <p className={styles.card__body}>{x.body}</p>
                <p className={styles.card__user}>
                  By <span>user {x.id}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllPosts;
