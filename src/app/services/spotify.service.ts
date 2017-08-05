import {Injectable} from '@angular/core'; 
import {RequestOptions, RequestMethod, RequestOptionsArgs, Http, Headers, URLSearchParams} from '@angular/http'; 
import 'rxjs/add/operator/map'; 

@Injectable()
export class SpotifyService {
    searchUrl: string; 
    client_id: string; 
    client_secret: string;
    artistUrl: string;
    albumsUrl: string;
    albumUrl: string;

    constructor(private http: Http){
        console.log('SpotifyService Initialized...'); 
        this.searchUrl = null; 
        this.client_id = 'e7b554a578824ed19cd99f1221f5add6';
        this.client_secret = '58d5dbe471e44e648a1a6533f1287ccb';
    }; 
    
    getToken(){
        let params = ('grant_type=client_credentials');
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(this.client_id + ':' + this.client_secret));
        headers.append('Content-type', 'application/x-www-form-urlencoded');

        return this.http.post('https://accounts.spotify.com/api/token', params, {headers: headers})
        .map(res=> res.json());
    }

    searchMusic(str: string){
        var headers = new Headers(); 
        var opt = {
            artistName: str
        }
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/search', JSON.stringify(opt),  {headers: headers})
        .map(res => res.json());
    };

    getArtist(id: string){
        var headers = new Headers(); 
        var opt = {
            artistId: id
        }
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/getArtist', JSON.stringify(opt),  {headers: headers})
        .map(res => res.json());
    }; 

    getAlbums(id: string) {
        var headers = new Headers(); 
        var opt = {
            artistId: id
        }
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/getAlbums', JSON.stringify(opt),  {headers: headers})
        .map(res => res.json());
    }

    getAlbum(id: string){
       var headers = new Headers(); 
        var opt = {
            albumId: id
        }
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/getAlbum', JSON.stringify(opt),  {headers: headers})
        .map(res => res.json());
}}

