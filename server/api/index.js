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

app.get('/get-all-users', async (req, res, next) => {
    console.log('get-all-users ' + JSON.stringify(req));
    return db.User.findAll()
        .then(users => res.send(users))
        .catch(err => {
            console.log('[ERROR; SQL]: ', JSON.stringify(err))
            return res.send(err)
        });
})

app.get('/auth/user', async (req, res, next) => {
    const { login, password } = req.body;
    console.log(`User load attempt: login: ${login} password: ${password}`);
    return db.User.findByLogin(login, password)
        .then(user => {
            if (user) {
                console.log(`User ${login} loaded successfully.`);
                return res.send(user);
            }
        })
        .catch(err => {
            console.log(`[ERROR; SQL]: User: ${err}`)
            return res.send(err)
        });
})

app.post('/auth/login', async (req, res, next) => {
    const { login, password } = req.body;
    console.log({ login, password });
    await db.User.findByLogin(login, password)
        .then(user => {
            if (!user) {
                console.log(`${login} entered wrong credentials on login. ${user}`);
            } else {
                console.log(`User ${login} logged in successfully. ${user}`);
            }
            return res.send(user);
        })
        .catch(err => {
            console.log(`[ERROR; SQL]: Authentication: ${err}`)
            return res.send(err)
        });
})

app.post('/auth/register', (req, res, next) => {
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
            console.log(`[ERROR; SQL]: Registration: ${err}`)
            return res.status(400).send(err)
        })
})

app.post('/auth/logout', (req, res, next) => {
    res.json({ status: 'OK' })
})

// export the server middleware
module.exports = {
    path: '/server/api',
    handler: app
};
