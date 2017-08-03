"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var SpotifyService = (function () {
    function SpotifyService(http) {
        this.http = http;
        console.log('SpotifyService Initialized...');
        this.searchUrl = null;
        this.client_id = 'e7b554a578824ed19cd99f1221f5add6';
        this.client_secret = '58d5dbe471e44e648a1a6533f1287ccb';
    }
    ;
    SpotifyService.prototype.getToken = function () {
        var params = ('grant_type=client_credentials');
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Basic ' + btoa(this.client_id + ':' + this.client_secret));
        headers.append('Content-type', 'application/x-www-form-urlencoded');
        return this.http.post('https://accounts.spotify.com/api/token', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.searchMusic = function (str, type, token) {
        if (type === void 0) { type = 'artist'; }
        this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=10&type=' + type;
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + token);
        return this.http.get(this.searchUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getArtist = function (id, token) {
        this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + token);
        return this.http.get(this.artistUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getAlbums = function (id, token) {
        this.albumsUrl = 'https://api.spotify.com/v1/artists/' + id + '/albums';
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + token);
        return this.http.get(this.albumsUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getAlbum = function (id, token) {
        this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + token);
        return this.http.get(this.albumUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return SpotifyService;
}());
SpotifyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SpotifyService);
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=spotify.service.js.map