const express = require('express');
const router = express.Router();
const { pool } = require('../../../config/dbconfig');

// user data endpoint. [localhost:PORT/user]

// get all data from "usertable"-table
router.get('/', async (request, response) => {
    try {
        const sqlCommand = "SELECT * FROM usertable";
        let result = await pool.query(sqlCommand);
        response.status(200).send(result.rows);
        console.log(`Query ${result.command} completed succesfully`);
    } catch (error) {
        response.status(404).send(`Caught error with ${request.command} query:`, error.message);
        console.error('err:', error);
    }
    // pool.end(() => { console.log('pool ended') })
});

// post data to "usertable"-table
// table body: user_id (generated in db), user_name, user_email, user_pw, user_created
// request body: { "name": "new user" }
router.post('/', async (request, response) => {
    const { name } = request.body;
    const values = [name];
    try {
        const sqlCommand = "INSERT INTO usertable (user_name) VALUES ($1)";
        await pool.query(sqlCommand, values);
        response.status(201).send(`Data '${request.body.name}' inserted succesfully`);
        console.log(`Query '${request.method}' completed succesfully`);
    } catch (error) {
        response.send('Caught error with query');
        console.error('err:', error);
    }
    // pool.end(() => { console.log('pool ended') })
});

// export
module.exports = router;