const express = require('express');
const app = express();
const db = require('../db/index.js');

app.get('/', (req, res, next) => {
    console.log('API root');
    res.send('API root');
})

app.get('/get-user', async (req, res) => {
    console.log('get-user');
    const { login, password } = req.body
    return db.User.findByLogin(login)
        .then((user) => res.send(user))
        .catch((err) => {
            console.log('SQL ERROR: ', JSON.stringify(err))
            return res.send(err)
        });
})

app.get('/get-all-users', async (req, res) => {
    console.log('get-all-users');
    return db.User.findAll()
        .then((user) => res.send(user))
        .catch((err) => {
            console.log('SQL ERROR: ', JSON.stringify(err))
            return res.send(err)
        });
})

app.post('/register', (req, res) => {
    console.log('test ' + JSON.stringify(req.body));
    const { username, email, password } = req.body
    return db.User.create({ username, email, password }).then((user) => res.send(user))
        .catch((err) => {
            console.log('***There was an error creating a user', JSON.stringify(err))
            return res.status(400).send(err)
        })
})

// export the server middleware
module.exports = {
    path: '/server/api',
    handler: app
};
