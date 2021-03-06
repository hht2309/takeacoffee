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
var spotify_service_1 = require("../../services/spotify.service");
var router_1 = require("@angular/router");
var ArtistComponent = (function () {
    function ArtistComponent(spotifyService, route) {
        this.spotifyService = spotifyService;
        this.route = route;
    }
    ArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this.id = id;
            _this.spotifyService.getToken()
                .subscribe(function (token) {
                _this.spotifyService.getArtist(_this.id, token.access_token)
                    .subscribe(function (artist) {
                    _this.artist = artist;
                    console.log(artist);
                });
            });
            _this.spotifyService.getToken()
                .subscribe(function (token) {
                _this.spotifyService.getAlbums(_this.id, token.access_token)
                    .subscribe(function (albums) {
                    _this.albums = albums.items;
                    console.log(albums);
                });
            });
        });
    };
    return ArtistComponent;
}());
ArtistComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'artist',
        templateUrl: "artist.component.html",
        providers: [spotify_service_1.SpotifyService],
    }),
    __metadata("design:paramtypes", [spotify_service_1.SpotifyService,
        router_1.ActivatedRoute])
], ArtistComponent);
exports.ArtistComponent = ArtistComponent;
//# sourceMappingURL=artist.component.js.map