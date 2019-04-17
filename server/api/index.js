const express = require('express');
const app = express();
const db = require('../db/index.js');

app.get('/', (req, res, next) => {
    res.send('API root');
})

app.get('/random-movie', async (req, res, next) => {
    const axios = require('axios');
    const movieOptions = [
        'tt3896198',
        'tt0071253',
        'tt0109686',
        'tt2267998',
        'tt0109040',
        'tt0089218'
    ];
    const movieID = movieOptions[Math.floor(Math.random() * movieOptions.length)];
    const movie = await axios.get(
        `https://www.omdbapi.com/?i=${movieID}&apikey=9733f1df`
    );
    res.json(movie.data);
})

app.get('/get-user', async (req, res, next) => {
    return db.User.findByLogin('kar')
        .then((user) => res.send(user))
        .catch((err) => {
            console.log('SQL ERROR: ', JSON.stringify(err))
            return res.send(err)
        });
})

// export the server middleware
module.exports = {
    path: '/server/api',
    handler: app
};
