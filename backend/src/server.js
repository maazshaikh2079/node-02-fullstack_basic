import 'dotenv/config';
import express from 'express';

const app = express();
const PORT = process.env.PORT;

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.get('/api/user', (req, res) => {
    const githubData = {
        "login": "maazshaikh2079",
        "id": 124486797,
        "node_id": "U_kgDOB2uEjQ",
        "avatar_url": "https://avatars.githubusercontent.com/u/124486797?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/maazshaikh2079",
        "html_url": "https://github.com/maazshaikh2079",
        "followers_url": "https://api.github.com/users/maazshaikh2079/followers",
        "following_url": "https://api.github.com/users/maazshaikh2079/following{/other_user}",
        "gists_url": "https://api.github.com/users/maazshaikh2079/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/maazshaikh2079/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/maazshaikh2079/subscriptions",
        "organizations_url": "https://api.github.com/users/maazshaikh2079/orgs",
        "repos_url": "https://api.github.com/users/maazshaikh2079/repos",
        "events_url": "https://api.github.com/users/maazshaikh2079/events{/privacy}",
        "received_events_url": "https://api.github.com/users/maazshaikh2079/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 26,
        "public_gists": 0,
        "followers": 9,
        "following": 21,
        "created_at": "2023-02-05T06:24:25Z",
        "updated_at": "2025-06-12T14:35:36Z"
    };
    res.json(githubData);
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
          id: 1,
          title: 'Programmer joke',
          content: 'Why do programmers prefer dark mode? Because light attracts bugs!'
        },
        {
          id: 2,
          title: 'Math joke',
          content: 'Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else.'
        },
        {
          id: 3,
          title: 'JS joke',
          content: 'Why did the JavaScript developer go broke? Because he kept using "var" when he should’ve used "let"!'
        },
        {
          id: 4,
          title: 'Debugging joke',
          content: 'Debugging is like being the detective in a crime movie where you are also the murderer.'
        },
        {
          id: 5,
          title: 'Syntax joke',
          content: 'I told my code to clean up, but it just threw an exception.'
        }
    ];
    res.send(jokes);
})

app.listen(PORT, () => {
    console.log(`Server is running at PORT:${PORT}`);
});
