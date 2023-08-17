import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesI } from 'src/app/models/movies.interfaces';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  moviesForm!: FormGroup;
  submited: boolean = false;
  movie!: MoviesI;
  movies!: MoviesI[];

  constructor(
    private form: FormBuilder,
    private movieEP: MoviesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.moviesForm = this.form.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
    });
    
    this.movieEP.getMovies().subscribe((data: any) => {
      for (let index = 0; index < data.length; index++) {
        console.log(data[index].img);
        
        
      }
      
      this.movies = [...data]
    })

    this.moviesForm.valueChanges.subscribe((data) => {
      this.movies = { ...data };
    });
  }

movieGet(movieAux: MoviesI){
  this.movieEP.setFilm(movieAux)
}


  movieAdd() {
    console.log(this.movie)
    this.submited = true;
    if (this.moviesForm.valid) {
      this.submited = false;
      this.movieEP.postMovies(this.movie).subscribe((data: any) => {
        this.moviesForm.reset(); 
        this.router.navigate(["/movies"])
      });
    }
  }

  movieDrop() {

    console.log("Borrar")
  }
}
