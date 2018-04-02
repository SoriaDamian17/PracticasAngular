import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  termino: string;

  constructor(public _spotify: SpotifyService) {}

  ngOnInit() {
  }

  buscarArtista() {
    this._spotify.getArtist()
                 .subscribe(resp => {
                   console.log(resp);
                 });
  }
}
