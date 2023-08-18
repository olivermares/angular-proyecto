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

  public movieData: any = {
    id: '',
    name: '',
    image: '',
  };
  
  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get(this.url)
  }

  editData(movie: MoviesI) {
    this.movieData = movie;
  }

  postMovie(movie: MoviesI){
    return this.http.post(this.url, movie)
  }

  putMovie(film: MoviesI, id: number){
    return this.http.put(`${this.url}/${id}`, film)
  }

  deleteMovie(id:string){
    return this.http.delete(`${this.url}/${id}`)
  }

  clearMovie() {
    this.movieData = {
      id: '',
      name: '',
      image: '',
    };
  }
}


