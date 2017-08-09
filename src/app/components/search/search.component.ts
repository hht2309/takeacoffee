import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';  
import {Artist} from '../../searchType/Artist'; 
import {Track} from '../../searchType/Track';

@Component({
    moduleId: module.id, 
  selector: 'search',
  templateUrl: `./search.component.html`,
  providers: [SpotifyService],
})
export class SearchComponent  {
  searchStr: string;
  searchResult_artist : Artist[];
  searchResult_track: Track[]; 
  type_artist: boolean; 

  constructor(private spotifyService: SpotifyService){
    this.type_artist = true; 
  }

  searchMusic(){
    this.spotifyService.searchMusic(this.searchStr, this.type_artist)
    .subscribe(
      results=>{
        if(this.type_artist){
          if (results.error){
            this.searchResult_artist = []; 
            console.log("not found");
          } else {
             this.searchResult_artist = results.artists.items;
          }
        } else {
           if (results.error){
            this.searchResult_track = []; 
            console.log("not found");
          } else {
             this.searchResult_track = results.tracks.items;
          }
        }
      }
    )
  }

  changeSearchTypeToArtist(){
    this.type_artist = true; 
  }

  changeSearchTypeToTrack(){
    this.type_artist = false; 
  }
}