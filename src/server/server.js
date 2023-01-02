// server:
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// use:
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// http port config:
const PORT = process.env.PORT || 8080;

// http server:
app.listen(PORT, () => { console.log(`http-server on port ${PORT}`); });

// root endpoint, get:
app.get('/', (request, response)=> {
    response.status(200).send('Server running succesfully.');
});

// router files:
// mock data:
const initial = require('./routes/api/initial');
// main data:
const user = require('./routes/api/user');
const tasks = require('./routes/api/tasks');

// routes:
// mock endpoint:
app.use('/initial', initial);
// main data endpoints:
app.use('/user', user);
app.use('/tasks', tasks);