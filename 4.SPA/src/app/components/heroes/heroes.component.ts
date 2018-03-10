import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../service/heroe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private heroes:any[] = [];

  constructor(private _heroes:HeroesService,
              private router:Router 
             ) { }

  ngOnInit() {
    this.heroes = this._heroes.getHeroes();
  }

  getDetail(id) {
    this.router.navigate( ['/heroe', id] );
  }

}
