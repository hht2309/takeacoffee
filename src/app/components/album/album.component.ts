import { Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Album} from '../../searchType/Album';
import {ActivatedRoute} from '@angular/router';
@Component({
  moduleId: module.id, 
  selector: 'album',
  templateUrl: `./album.component.html`,
  providers: [SpotifyService], 
})
export class AlbumComponent implements OnInit {
    id: string; 
    album: Album; 
    constructor(
        private spotifyService: SpotifyService,
        private route: ActivatedRoute
        ){}
    ngOnInit(){
        this.route.params
            .map(params => params['id'])
            .subscribe(id => {
                this.id = id; 
                this.spotifyService.getToken()
                    .subscribe(
                    token => {
                        this.spotifyService.getAlbum(this.id, token.access_token)
                        .subscribe(
                        album=>{
                            this.album = album;
                            console.log(album);
                        })
                    });
            })
    }
}