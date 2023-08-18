import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserI} from '../../models/interfaces.user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  db_url: string = 'http://localhost:5000';
  
  constructor (private http: HttpClient) {}

  register(user: UserI){
    console.log('Estoy en registro de auth');
    console.log('user.email = ', user.email);
    console.log('user.password = ', user.password);
    
    
    return this.http.post(`${this.db_url}/register`, user)
  }


}


  
  

