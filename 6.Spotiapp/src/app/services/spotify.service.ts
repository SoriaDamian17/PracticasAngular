import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  constructor(public http: HttpClient) {
    console.log('Initiacos servicio spotify.');
  }

  getArtist() {
    const URL = 'https://api.spotify.com/v1/search?query=metallica&type=artist&limit=20';

    const headers = new HttpHeaders({
      'authorization': 'Bearer BQCDW9sBon3o-jLjAMFx135YJaTxPbZMnEy02V_kmVk-lk_ECuC8qV1BXEiyMzeva-Um4DCe86L1dkP6KxE'
    });

    return this.http.get(URL, { headers: headers })
                    .map((resp: any) => {
                      this.artistas = resp.artists.items;
                      return this.artistas;
                    });
  }

}
