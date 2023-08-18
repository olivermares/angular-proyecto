import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-manager',
  templateUrl: './film-manager.component.html',
  styleUrls: ['./film-manager.component.scss']
})
export class FilmManagerComponent {

  user: any = null;
  nombre: string = "";
  isLogged: boolean = false;

  constructor(private router: Router){
    const userJson = localStorage.getItem('user');
  
    // Se comprueba que no sea nulo previamente. Sino parse(null) daría error. 
    if(userJson !== null){
      // this.user = JSON.parse(userJson);
      // this.nombre = this.user.email.split('@')[0];
      console.log('Usuario logado');
      this.isLogged = true
      
    } else {
      console.log('Usuario no logado');
      
      this.isLogged = false
    }
  
  }


}
