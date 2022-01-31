export default async function handler(req, res) {
  // fetch vers l'api publique
  const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // on définit le header personnalisé
    headers: {
      "lucas-tamaya-codedamn-project": "jsonproxyholder",
    },
  });
  const data = await result.json();
  res.status(200).json(data);
}
