import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActorsI } from 'src/app/models/actors.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {
  url: string = 'http://localhost:5000/actors';
  id!: number;
  actors!: ActorsI;

  constructor(private http: HttpClient) { }

  getActors(){
    return this.http.get(this.url)
  }

  getActorById(id: number){
    return this.http.get(`${this.url}/${id}`);
  }

  postActors(film: ActorsI){
    return this.http.post(this.url, film)
  }
}
