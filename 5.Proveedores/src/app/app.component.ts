import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './config/firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  list:any = ['Inicio', 'Registro', 'Presupuestos', 'Contratos']
    
  ngOnInit() {
    AngularFireModule.initializeApp(firebaseConfig);
  }
}
