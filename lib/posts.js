import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: "https://musabbirsagar.digitalpress.blog",
  key: "f1e62c73ddff5e1db6cc1ae33b",
  version: "v5.0",
});

//Exposing content
export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}
