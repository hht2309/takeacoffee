import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';  
import {Artist} from '../../searchType/Artist'; 

@Component({
    moduleId: module.id, 
  selector: 'search',
  templateUrl: `./search.component.html`,
  providers: [SpotifyService],
})
export class SearchComponent  {
  searchStr: string;
  searchResult_artist : Artist[];

  constructor(private spotifyService: SpotifyService){
    
  }
  searchMusic() {
    this.spotifyService.getToken()
    .subscribe(
      results => {
        this.spotifyService.searchMusic(this.searchStr, 'artist', results.access_token)
        .subscribe(
          results=>{
            this.searchResult_artist = results.artists.items;
          }
        )
      }
    )
  }
}