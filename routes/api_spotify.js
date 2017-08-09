var api_spotify = {
    client_id: 'e7b554a578824ed19cd99f1221f5add6',
    client_secret: '58d5dbe471e44e648a1a6533f1287ccb',

    // get access token function
    getToken: function(callback) {
        var request = require('request');
        var options = {
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': 'Basic ' + new Buffer(this.client_id + ':' + this.client_secret).toString('base64'),
                'Content-type': 'application/x-www-form-urlencoded'
            }
        }
        request.post(options, (error, res, body) => {
            if (error) { console.log(error) } // log if there's error
            else {
                callback(JSON.parse(body).access_token) // if not send access token
            }
        }).form({ 'grant_type': 'client_credentials' });
    },

    // search music by artist 
    searchMusicByArtist: function(name, type, callback) {
        this.getToken(function(token) {
            var searchUrl = 'https://api.spotify.com/v1/search?query=' + name + '&offset=0&limit=10&type=' + type;
            var request = require('request');
            var options = {
                url: searchUrl,
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            };
            request(options, function(error, res, body) {
                if (error) { console.log(error) } else {
                    callback(JSON.parse(body));
                }
            })
        })
    },

    // get infos about chosen artist
    getArist(id, callback) {
        this.getToken(function(token) {
            var artistUrl = 'https://api.spotify.com/v1/artists/' + id;
            var request = require('request');
            var options = {
                url: artistUrl,
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            };
            request(options, function(error, res, body) {
                if (error) { console.log(error) } else {
                    callback(JSON.parse(body));
                }
            });
        })
    },

    // get all albums of chosen artist
    getAlbums(id, callback) {
        this.getToken(function(token) {
            var searchUrl = 'https://api.spotify.com/v1/artists/' + id + '/albums';
            var request = require('request');
            var options = {
                url: searchUrl,
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            };
            request(options, function(error, res, body) {
                if (error) { console.log(error) } else {
                    callback(JSON.parse(body));
                }
            });
        })
    },

    // get detail of chosen album
    getAlbum(id, callback) {
        this.getToken(function(token) {
            var searchUrl = 'https://api.spotify.com/v1/albums/' + id;
            var request = require('request');
            var options = {
                url: searchUrl,
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            };
            request(options, function(error, res, body) {
                if (error) { console.log(error) } else {
                    callback(JSON.parse(body));
                }
            });
        })
    }


}

module.exports = api_spotify;