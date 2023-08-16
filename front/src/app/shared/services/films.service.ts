import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmI } from 'src/app/models/interfaces.film';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  url: string = 'http://localhost:5000/film';
  id!: number;
  film!: FilmI;
  
  constructor(private http: HttpClient) { }

  getFilms(){
    return this.http.get(this.url)
  }
    
  getFilmById(id: number){
    return this.http.get(`${this.url}/${id}`);
  }

  postFilms(film: FilmI){
    return this.http.post(this.url, film)
  }

  putFilms(film: FilmI, id: number){
    return this.http.put(`${this.url}/${id}`, film)
  }

  deleteFilms(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }

  setFilm(film: FilmI){
    this.film = {...film}
  }

  getId(){
    return this.id; 
  }

}


