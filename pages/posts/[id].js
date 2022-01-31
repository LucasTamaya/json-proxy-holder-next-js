import styles from "../../styles/AllPosts.module.css";

export const getServerSideProps = async (context) => {
  // fetch vers notre proxy pour récupérer le post correspondant à l'id
  const resPost = await fetch(
    `https://json-proxy-holder-next-js-lucastamaya.vercel.app/api/posts/${context.params.id}`
  );
  const post = await resPost.json();

  // fetch vers notre proxy pour récupérer les commentaires du post correspondant à l'id
  const resComments = await fetch(
    `https://json-proxy-holder-next-js-lucastamaya.vercel.app/api/posts/${context.params.id}/comments`
  );
  const comments = await resComments.json();

  return {
    props: {
      post,
      comments,
    },
  };
};

const SinglePost = ({ post, comments }) => {
  return (
    <main>
      <div className={styles.post__comments}>
        <h1 className={styles.post__comments__title}>Post {post.id}</h1>
        <div className={styles.card}>
          <h1 className={styles.card__title}>{post.title}</h1>
          <p className={styles.card__body}>{post.body}</p>
          <p className={styles.card__user}>
            By <span>user {post.userId}</span>
          </p>
        </div>
        <h1 className={styles.post__comments__title}>Comments</h1>
        <div className={styles.comment__container}>
          {comments.map((x) => (
            <div className={styles.comment} key={x.id}>
              <h2 className={styles.comment__name}>{x.name}</h2>
              <p className={styles.comment__body}>{x.body}</p>
              <p className={styles.comment__email}>
                Commented by <span>{x.email}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SinglePost;
