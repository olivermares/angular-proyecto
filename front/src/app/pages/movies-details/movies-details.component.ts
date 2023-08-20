import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesI } from 'src/app/models/movies.interfaces';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { ActorsService } from 'src/app/shared/services/actors.service';
import { ActorsI } from 'src/app/models/actors.interfaces';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss'],
})
export class MoviesDetailsComponent implements OnInit {
  movieForm!: FormGroup;
  movie = this.movieService.movieData;
  newMovie = this.movieService.movieData;
  movieAux!: MoviesI;
  actors!: ActorsI[];
  castList: string[] = new Array();
  castInMovie : string[] = new Array();
  id!: string | null;

  constructor(
    private movieService: MoviesService,
    private router: Router,
    private actorsService: ActorsService,
    private form: FormBuilder,
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.movieForm = this.form.group({
      title: [this.newMovie.title, Validators.required],
      image: [this.newMovie.image, Validators.required],
      director: [this.newMovie.director],
    });

    this.movieForm.valueChanges.subscribe((changes: any) => {
      this.newMovie = changes;
    });
    this.activatedRoute.paramMap.subscribe(params=>{
      this.id= params.get("id")
    })

    this.actorsService.getActors().subscribe((data: any) => {
      this.castInMovie = [...this.newMovie.cast]
      this.actors = [...data].filter(
        (actor: ActorsI) => this.compareClient(actor) // lista con los actores no casteados
      );
    });
    this.movieService.getMovie(this.id).subscribe((data: any) =>{
      this.movie={...data}
    })
  }

  compareClient(actor: ActorsI) {
    let notFind = false;
    let i = 0;
    while (!notFind && i < this.newMovie.cast.length) {
      notFind = actor._id == this.newMovie.cast[i]._id;
      i++;
    }
    return !notFind;
  }

  update() {
    this.movieService
      .putMovie(this.newMovie, this.movie._id)
      .subscribe((data) => {
        console.log(data);
      });
  }

  drop() {
    this.movieService.deleteMovie(this.movie._id).subscribe((data) => {
      //console.log(data);
    });
    this.router.navigate(['/movies']);
  }

  onCheckboxCast(e: any) {
    if (e.target.checked) {
      this.castList.push(e.target.value);
    } else {
      this.castList.splice(
        this.castList.findIndex((castList) => castList === e.target.value),
        1
      );
    }
  }

  onCheckboxNoCast(e: any) {
    console.log(this.castInMovie)
  }

  cast() {
    this.newMovie.cast =[...this.newMovie.cast , ...this.castList] //this.castList;
    this.update();
  }

  noCast() {
    console.log("No cast")
  }
}
