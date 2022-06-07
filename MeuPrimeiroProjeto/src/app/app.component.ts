import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Kelle Cordeiro';
  userData = {
    email: 'kelle@gmail.com',
    role: 'admin',
  }; 
  title = 'MeuPrimeiroProjeto';
}
