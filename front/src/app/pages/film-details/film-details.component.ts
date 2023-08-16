import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmI } from 'src/app/models/interfaces.film';
import { FilmsService } from 'src/app/shared/services/films.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  id!: number;
  film!: FilmI
  constructor(private filmEp: FilmsService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    })

    this.filmEp.getFilmById(this.id).subscribe((data:any) => {
      this.film = {...data}
    })
  }
}
