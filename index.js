require('dotenv').config();

const express = require("express");

const app = express();

const port = 4000;

const gitHubData = {
  "login": "KAadi2023",
  "id": 139689637,
  "node_id": "U_kgDOCFN-pQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/139689637?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/KAadi2023",
  "html_url": "https://github.com/KAadi2023",
  "followers_url": "https://api.github.com/users/KAadi2023/followers",
  "following_url": "https://api.github.com/users/KAadi2023/following{/other_user}",
  "gists_url": "https://api.github.com/users/KAadi2023/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/KAadi2023/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/KAadi2023/subscriptions",
  "organizations_url": "https://api.github.com/users/KAadi2023/orgs",
  "repos_url": "https://api.github.com/users/KAadi2023/repos",
  "events_url": "https://api.github.com/users/KAadi2023/events{/privacy}",
  "received_events_url": "https://api.github.com/users/KAadi2023/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Aditya Kumar",
  "company": null,
  "blog": "",
  "location": "mohali, Panjab",
  "email": null,
  "hireable": null,
  "bio": "I'm a B.Tech Student at Gandhi Institute For Education & Technology @giet.",
  "twitter_username": null,
  "public_repos": 15,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-07-16T12:06:42Z",
  "updated_at": "2024-01-18T05:52:11Z"
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Aadidotcom.json");
});

app.get("/facebook", (req, res) => {
  res.send("<h1>Facebook</h1>");
});

app.get("/instagram", (req, res) => {
  res.send("<h1>Instagram</h1>");
});

app.get("/github", (req, res) => {
  res.json(gitHubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}!`);
});
