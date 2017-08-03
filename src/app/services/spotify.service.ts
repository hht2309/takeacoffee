import {Injectable} from '@angular/core'; 
import {RequestOptions, RequestMethod, RequestOptionsArgs, Http, Headers} from '@angular/http'; 
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
    
    searchMusic(str: string, type='artist', token:string){
        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=10&type='+type;
        let headers = new Headers();
        headers.append('Authorization', 'Bearer '+token);
        return this.http.get(this.searchUrl, {headers: headers})
        .map(res => res.json());
    }

    getArtist(id: string, token: string){
        this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
        let headers = new Headers();
        headers.append('Authorization', 'Bearer '+token);
        return this.http.get( this.artistUrl, {headers: headers})
        .map(res => res.json());
    }

    getAlbums(id: string, token: string){
    this.albumsUrl = 'https://api.spotify.com/v1/artists/'+id+'/albums';
    let headers = new Headers();
    headers.append('Authorization', 'Bearer '+token);
    return this.http.get( this.albumsUrl, {headers: headers})
    .map(res => res.json());
}

    getAlbum(id: string, token: string){
    this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;
    let headers = new Headers();
    headers.append('Authorization', 'Bearer '+token);
    return this.http.get( this.albumUrl, {headers: headers})
    .map(res => res.json());
    }
}

