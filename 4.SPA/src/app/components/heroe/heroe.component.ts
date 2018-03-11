import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroe.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe:any = {};

  constructor( private activedRouter:ActivatedRoute, 
               private heroeDetail:HeroesService 
              ) {
    this.activedRouter.params.subscribe( params => {
      this.heroe = this.heroeDetail.getHeroe(params['id']);
      console.log(this.heroe);
    });

  }

}
