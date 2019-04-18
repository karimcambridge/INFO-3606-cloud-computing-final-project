const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('../db/index.js');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
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

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body
    await db.User.create({ username, email, password }).then((user) => res.send(user))
        .catch((err) => {
            console.log('***There was an error creating a user', JSON.stringify(err))
            return res.status(400).send(err)
        })
})

app.listen(3000, () => {
    console.log('API is listening on port 3000');
});

// export the server middleware
module.exports = {
    path: '/server/api',
    handler: app
};
