import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  listObservable: Observable<any[]>;

  constructor(private db:AngularFireDatabase) { }

  ngOnInit() {
    this.listObservable = this.getList('/courses');
  }

  getList(listPath):Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}
