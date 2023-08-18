import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesI } from 'src/app/models/movies.interfaces';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})

export class MoviesComponent implements OnInit {
  moviesForm!: FormGroup;
  submited: boolean = false;
  movie!: MoviesI;
  movies!: MoviesI[];

  constructor(
    private form: FormBuilder,
    private moviesService: MoviesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.moviesForm = this.form.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
    });

    this.moviesService.getMovies().subscribe((data: any) => {
      for (let index = 0; index < data.length; index++) {}
      this.movies = [...data];
    });

    this.moviesForm.valueChanges.subscribe((data) => {
      this.movie = { ...data };
    });
  }

  selectMovie(movie: MoviesI){
    this.moviesService.movieData=movie;
    this.router.navigate(["movies/" + movie._id]); 
  }

  addMovie() {
    this.submited = true;
    if (this.moviesForm.valid) {
      this.submited = false;
      this.moviesService.postMovie(this.movie).subscribe((data: any) => {
        window.location.reload();
      });
    }
  }
}
