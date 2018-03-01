import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    title = 'app';
    nombre:string = 'Damian';
    apellido:string = "Soria";
}
  