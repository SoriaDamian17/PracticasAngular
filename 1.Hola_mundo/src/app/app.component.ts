import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  frase:any = {
    message:'Un gran poder con lleva una gran responsabilidad!',
    author: 'Ben parker'
  }
}
