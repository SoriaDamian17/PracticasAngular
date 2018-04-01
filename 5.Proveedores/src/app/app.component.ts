<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './config/firebase.config';
>>>>>>> aa4285b7a562e7be85a9eb732fea01ee89a9424f

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent {
  title = 'app';
=======
export class AppComponent implements OnInit {
  list:any = ['Inicio', 'Registro', 'Presupuestos', 'Contratos']
    
  ngOnInit() {
    AngularFireModule.initializeApp(firebaseConfig);
  }
>>>>>>> aa4285b7a562e7be85a9eb732fea01ee89a9424f
}
