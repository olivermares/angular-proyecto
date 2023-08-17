import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesI } from 'src/app/models/movies.interfaces';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url: string = 'http://localhost:5000/movies';
  id!: number;
  movie!: MoviesI;
  
  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get(this.url)
  }
    
  getFilmById(id: number){
    return this.http.get(`${this.url}/${id}`);
  }

  postMovies(film: MoviesI){
    return this.http.post(this.url, film)
  }

  putMovies(film: MoviesI, id: number){
    return this.http.put(`${this.url}/${id}`, film)
  }

  deleteMovies(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }

  setFilm(movie: MoviesI){
    this.movie = {...movie}
  }

  getId(){
    return this.id; 
  }

}


