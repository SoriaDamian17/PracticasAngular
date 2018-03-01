import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
  mostrar:boolean = true;

  frase:any = {
    message:'Un gran poder con lleva una gran responsabilidad!',
    author: 'Ben parker'
  }

  personajes:string[] = ['Spiderman','Venom', 'Dr.Octopus'];
}
