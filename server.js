// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Create express app
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all the GET request and return the index file from angular
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.htlm'));
});

// Get port from envirenment and store in express
const port = process.env.PORT || '3000';
app.set('port', port);

// Create http-server 
const server = http.createServer(app);
server.listen(port, () => {
    console.log('Server running on localhost:', port);
})