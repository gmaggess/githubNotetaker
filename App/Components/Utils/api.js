const GITHUB_API_BASE = "https://api.github.com";
const FIREBASE_API_BASE = "https://githubnotetaker-3d360.firebaseio.com/";

export default api = {
  getBio(username) {
    username = username.toLowerCase().trim();
    const url = `${GITHUB_API_BASE}/users/${username}`;

    return fetch(url).then((res) => res.json());
  },
  getRepos(username) {
    username = username.toLowerCase().trim();
    const url = `${GITHUB_API_BASE}/users/${username}/repos`;

    return fetch(url).then((res) => res.json());
  },
  getNotes(username) {
    username = username.toLowerCase().trim();
    const url = `${FIREBASE_API_BASE}/${username}.json`;

    return fetch(url).then((res) => res.json());
  },
  addNote(username, note) {
    username = username.toLowerCase().trim();
    const url = `${FIREBASE_API_BASE}/${username}.json`;

    return fetch(url, {
      method: "POST",
      body: JSON.stringify(note)
    }).then((res) => res.json());
  }
}