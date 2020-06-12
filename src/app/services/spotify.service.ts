import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log("Servicio de sputi listo");
  }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({'Authorization': 'Bearer BQBCiHexWqoLgyYWzNeoPrD4ivzYjrBQdg7MIJha-Jpsq5FwaV3q-Ycup0PfsrfECNRMLweytbW5job4bU8'});
    return this.http.get(url, {headers });
  }

  getNewRelease()
  {
    return this.getQuery('browse/new-releases')
      .pipe(map (data => data['albums'].items ));

  }

  getArtists(termino: string)
  {
    return this.getQuery(`search?q=${termino}&type=artist&limit=5`)
      .pipe(map(data => data['artists'].items ));
  }

  getArtist(id: string)
  {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string) {
   return this.getQuery(`artists/${ id }/top-tracks?country=us`)
     .pipe(map(data => data['tracks']));
  }
}
