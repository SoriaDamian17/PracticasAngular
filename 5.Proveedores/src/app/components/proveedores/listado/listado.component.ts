import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
>>>>>>> aa4285b7a562e7be85a9eb732fea01ee89a9424f

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
  }

=======
  listObservable: Observable<any[]>;

  constructor(private db:AngularFireDatabase) { }

  ngOnInit() {
    this.listObservable = this.getList('/courses');
  }

  getList(listPath):Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
>>>>>>> aa4285b7a562e7be85a9eb732fea01ee89a9424f
}
