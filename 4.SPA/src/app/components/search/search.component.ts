import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../service/heroe.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _search: HeroesService) { }

  ngOnInit() {
    
  }

}
