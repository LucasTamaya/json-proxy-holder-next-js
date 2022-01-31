export default async function handler(req, res) {
    const id = req.query.id;
    console.log(id);
    // res.status(200).json({name: id})
    // fetch vers l'api publique
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      {
        // on définit le header personnalisé
        headers: {
          "lucas-tamaya-codedamn-project": "jsonproxyholder",
        },
      }
    );
    const data = await result.json();
    res.status(200).json(data);
  }
  