var express = require('express');
var router = express.Router();
var path = require('path');
var api_spotify = require('./api_spotify');


// get search artist request from browser, return the result if found
router.post('/search', (req, res, next) => {
    api_spotify.searchMusicByArtist(req.body.artistName, req.body.type, function(body) {
        res.json(body);
    });
});

// get artist info 
router.post('/getArtist', (req, res, next) => {
    api_spotify.getArist(req.body.artistId, function(body) {
        res.json(body);
    })
});

// get all album of chosen artist
router.post('/getAlbums', (req, res, next) => {
    api_spotify.getAlbums(req.body.artistId, function(body) {
        res.json(body);
    })
});

// get detail of chosen album
router.post('/getAlbum', (req, res, next) => {
    api_spotify.getAlbum(req.body.albumId, function(body) {
        res.json(body);
    })
})


// catch all the other request and send back the index.html
router.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});





module.exports = router;