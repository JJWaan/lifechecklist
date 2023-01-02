const { Pool, Client } = require('pg');

const pool = new Pool({
    host: 'localhost',
    database: 'omadb',
    user: 'postgres',
    password: 'admin',
    port: 5433,
    idleTimeoutMillis: 8000,
    connectionTimeoutMillis: 2000,
    max: 8,
    // allowExitOnIdle: true,
});

const client = new Client({
    host: 'localhost',
    database: 'omadb',
    user: 'postgres',
    password: 'admin',
    port: 5433,
});

module.exports = {
    pool,
    client,
}