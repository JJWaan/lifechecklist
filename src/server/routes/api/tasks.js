const express = require("express");
const router = express.Router();
const { pool } = require("../../../config/dbconfig");

// task data endpoint. [localhost:PORT/tasks]

// get all data from "taskstable"-table
router.get("/", async (request, response) => {
    try {
        const sqlCommand = "SELECT * FROM taskstable";
        let result = await pool.query(sqlCommand);
        response.status(200).send(result.rows);
        console.log(`Query ${result.command} completed succesfully`);
    } catch (error) {
        response
            .status(404)
            .send(`Caught error with ${request.command} query:`, error.message);
        console.error("err:", error);
    }
    // pool.end(() => { console.log('pool ended') })
});

// post data to "taskstable"-table
// table body: task_id (generated in db), task_text, task_date, task_complete
// request body: { "task": "new task" }
router.post("/", async (request, response) => {
    const { task } = request.body;
    const values = [task];
    try {
        const sqlCommand = "INSERT INTO taskstable (task_text) VALUES ($1)";
        await pool.query(sqlCommand, values);
        response
            .status(201)
            .send(`Data '${request.body.task}' inserted succesfully`);
        console.log(`Query '${request.method}' completed succesfully`);
    } catch (error) {
        response.send("Caught error with query");
        console.error("err:", error);
    }
    // pool.end(() => { console.log('pool ended') })
});

// delete data by task id from "taskstable"-table
router.delete("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const values = [id];
        const sqlCommand = "DELETE FROM taskstable WHERE task_id=($1)";
        await pool.query(sqlCommand, values);
        response.status(200).send(`Deleted a task successfully.`);
        console.log(`Query '${request.method}' completed succesfully`);
    } catch (error) {
        response.status(404).send(`Caught error with query:`, error.message);
        console.error("err:", error);
    }
    // pool.end(() => { console.log('pool ended') })
});

// export
module.exports = router;
