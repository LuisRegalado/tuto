import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas:any [] = [];
  flag:boolean;

  constructor(private spotify:SpotifyService) { }

  buscar(termino:string){
    this.flag = true;
    console.log(termino);
    this.spotify.getArtists(termino).subscribe((data:any) => {
      this.flag=false;
      this.artistas = data;
    });
  }

  ngOnInit(): void {
  }

}
