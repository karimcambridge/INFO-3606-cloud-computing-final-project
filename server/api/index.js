const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const db = require('../db/models/index.js');

const JWT_SECRET_NAME = 'secretcloudboard';

const app = express();

// parse cookies
app.use(cookieParser());

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    console.log('API root');
    res.send('API root');
})

app.get('/get-all-users', async (req, res, next) => {
    console.log('get-all-users ' + req);
    await db.User.findAll()
        .then(users => {
            res.json(users);
            console.log('[API; get-all-users]: ' + JSON.stringify(users));
        })
        .catch(err => {
            console.log('[ERROR; SQL]: Get all users: ' + err);
            res.status(400).send(err);
        });
})

app.get('/auth/user', (req, res, next) => {
    /*
    const { login, password } = req.body;
    console.log(`User load attempt: req.body: ${JSON.stringify(req.body)}`);
    db.User.findByLogin(login, password)
        .then(user => {
            if (user) {
                console.log(`User ${login} loaded successfully.`);
                res.json({ user: req.user })
            }
        })
        .catch(err => {
            console.log(`[ERROR; SQL]: User: ${err}`)
            res.send(err);
        });
    */
   res.json( {user: { username: 'test', email: 'test@test.com' }} );
})

app.post('/auth/login', async (req, res, next) => {
    const { login, password } = req.body;
    console.log({ login, password });
    await db.User.findByLogin(login, password)
        .then(user => {
            if (!user) {
                console.log(`${login} entered wrong credentials on login. ${user}`);
                res.status(400).send(user);
            } else {
                console.log(`User ${login} logged in successfully. ${user}`);
                const accessToken = jsonwebtoken.sign(
                    {
                        username: user.username,
                        email: user.email
                    },
                    JWT_SECRET_NAME
                );
                res.json({
                    token: {
                        accessToken
                    }
                });
            }
        })
        .catch(err => {
            console.log(`[ERROR; SQL]: Authentication: ${err}`)
            res.status(400).send(err);
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
            const accessToken = jsonwebtoken.sign(
                {
                    username: user.username,
                    email: user.email
                },
                JWT_SECRET_NAME
            );
            res.json({
                token: {
                    accessToken
                }
            });
        })
        .catch(err => {
            console.log(`[ERROR; SQL]: Registration: ${err}`);
            res.status(400).send(err);
        })
})

app.post('/auth/logout', (req, res, next) => {
    res.json({ status: 'OK' })
})

// Error handler
app.use((err, req, res, next) => {
    console.error(err) // eslint-disable-line no-console
    res.status(401).send(err + '');
})

// export the server middleware
module.exports = {
    path: '/server/api',
    handler: app
};
