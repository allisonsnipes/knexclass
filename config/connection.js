// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require('mysql')

// Set up our connection information
var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'nodeUser',
    password: '',
    database: 'todolist'
})

// Connect to the database
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack)
        return;
    }
    console.log('connected as id ' + connection.threadId)
})

// Creates mySQL connection using Knex.js
const Knex = require('knex')(require('../knexfile'))

// Exports the connection for other files to use
module.exports = Knex