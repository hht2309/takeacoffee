// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const argv = require('optimist').argv;
const api = require('./routes/api');
// Create express app
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


app.use('/api', api);

// Catch all the other GET request and return the index file from angular
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'));
});

// Get port from envirenment and store in express
const port = process.env.PORT || '1234';
app.set('port', port);

// Create http-server;

app.listen(port, argv.ip);
console.log('app listening on port ', port);