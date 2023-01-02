const express = require('express');
const router = express.Router();
const { pool } = require('../../../config/dbconfig');

// This is a mock endpoint for connection testing and playing around purposes.
//

// get all mock data from "initial"-table [localhost:PORT/initial]
router.get('/', async (request, response) => {
    try {
        const sqlCommand = "SELECT * FROM initial";
        let result = await pool.query(sqlCommand);
        response.status(200).send(result.rows);
        console.log(`Query ${result.command} completed succesfully`);
    } catch (error) {
        response.status(404).send(`Caught error with ${request.command} query:`, error.message);
        console.error('err:', error);
    }
    // pool.end(() => { console.log('pool ended') })
});

// post mock data to "initial"-table [localhost:PORT/initial]
// request body: { "text": "abcdefg" }
router.post('/', async (request, response) => {
    const { text } = request.body;
    const values = [text];
    try {
        const sqlCommand = "INSERT INTO initial (test_text) VALUES ($1)";
        await pool.query(sqlCommand, values);
        response.status(201).send(`Data '${request.body.text}' inserted succesfully`);
        console.log(`Query '${request.method}' completed succesfully`);
    } catch (error) {
        response.send('Caught error with query');
        console.error('err:', error);
    }
    // pool.end(() => { console.log('pool ended') })
});

// export
module.exports = router;