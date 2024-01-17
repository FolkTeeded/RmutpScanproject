const { Pool} = require('pg')
const pool = new pool({
    host:'db',
    port:5432,
    user:'postgres',
    password:'password123',
    database:'projectEnd'
})
module.exports = pool;