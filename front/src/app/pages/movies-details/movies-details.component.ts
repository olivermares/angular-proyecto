import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesI } from 'src/app/models/movies.interfaces';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {
  id!: number;
  movies!: MoviesI
  constructor(private moviesEp: MoviesService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    })

    this.moviesEp.getMoviesById(this.id).subscribe((data:any) => {
      this.movies = {...data}
    })
  }
}
