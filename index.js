require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const githubData = {
    "login": "NiharikaGupta1304",
    "id": 170568717,
    "node_id": "U_kgDOBo3jIA",
    "avatar_url": "https://avatars.githubusercontent.com/u/170568717?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/NiharikaGupta1304",
    "html_url": "https://github.com/NiharikaGupta1304",
    "followers_url": "https://api.github.com/users/NiharikaGupta1304/followers",
    "following_url": "https://api.github.com/users/NiharikaGupta1304/following{/other_user}",
    "gists_url": "https://api.github.com/users/NiharikaGupta1304/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/NiharikaGupta1304/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/NiharikaGupta1304/subscriptions",
    "organizations_url": "https://api.github.com/users/NiharikaGupta1304/orgs",
    "repos_url": "https://api.github.com/users/NiharikaGupta1304/repos",
    "events_url": "https://api.github.com/users/NiharikaGupta1304/events{/privacy}",
    "received_events_url": "https://api.github.com/users/NiharikaGupta1304/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Niharika Gupta",
    "company": "TCS",
    "blog": "",
    "location": "New Delhi",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 10,
    "public_gists": 0,
    "followers": 0,
    "following": 3,
    "created_at": "2024-03-17T15:32:49Z",
    "updated_at": "2024-11-01T14:00:58Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
    res.send('niharikadotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur code</h2>');
})

app.get('/github', (req, res) => {
    res.json(githubData);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});