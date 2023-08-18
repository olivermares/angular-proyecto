import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesI } from 'src/app/models/movies.interfaces';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {
  movieForm!: FormGroup;
  movie= this.movieService.movieData;
  movieAux!: MoviesI;

  constructor(
  private movieService: MoviesService,
  private router: Router, 
  private form: FormBuilder,
  ){}

  ngOnInit(): void {
    this.movieForm = this.form.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
    })
  }

  update(){
    console.log(this.movie)
  }

  drop(){
    this.movieService.deleteMovie(this.movie._id).subscribe(data=>{console.log(data)})
    this.router.navigate(["/movies"])
  }
}
