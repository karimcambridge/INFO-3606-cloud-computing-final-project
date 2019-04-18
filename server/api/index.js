const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('../db/models/index.js');

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    console.log('API root');
    res.send('API root');
})

app.get('/get-user', async (req, res, next) => {
    console.log('get-user ' + JSON.stringify(req));
    const { login, password } = req.body;
    return db.User.findByLogin(login)
        .then(user => res.send(user))
        .catch(err => {
            console.log('[ERROR; SQL]: ', JSON.stringify(err))
            return res.send(err)
        });
})

app.get('/get-all-users', async (req, res, next) => {
    console.log('get-all-users ' + JSON.stringify(req));
    return db.User.findAll()
        .then(users => res.send(users))
        .catch(err => {
            console.log('[ERROR; SQL]: ', JSON.stringify(err))
            return res.send(err)
        });
})

app.post('/register', (req, res, next) => {
    const { username, email, password } = req.body;
    console.log({ username, email, password });
    db.User.create({
            username: username,
            email: email,
            password: password
        })
        .then(user => {
            console.log('New user created successfully')
            res.send(user);
        })
        .catch(err => {
            console.log('[ERROR; SQL]: User creation: ' + JSON.stringify(err))
            return res.status(400).send(err)
        })
})

// export the server middleware
module.exports = {
    path: '/server/api',
    handler: app
};
