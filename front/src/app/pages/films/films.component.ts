import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FilmI } from 'src/app/models/interfaces.film';
import { FilmsService } from 'src/app/shared/services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  filmForm!: FormGroup;
  submited: boolean = false;
  film!: FilmI;
  films!: FilmI[];

  constructor(
    private form: FormBuilder,
    private filmEP: FilmsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.filmForm = this.form.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
    });
    
    this.filmEP.getFilms().subscribe((data: any) => {
      console.log('Estoy en getFilms');
      console.log('data = ', data);

      for (let index = 0; index < data.length; index++) {
        console.log(data[index].img);
        
        
      }
      
      this.films = [...data]
    })

    this.filmForm.valueChanges.subscribe((data) => {
      this.film = { ...data };
    });
  }

filmGet(filmAux: FilmI){
  this.filmEP.setFilm(filmAux)
}


  filmAdd() {
    console.log(this.film)
    this.submited = true;
    if (this.filmForm.valid) {
      this.submited = false;
      this.filmEP.postFilms(this.film).subscribe((data: any) => {
        this.filmForm.reset(); 
        this.router.navigate(["/films"])
      });
    }
  }

  filmDrop() {

    console.log("Borrar")
  }
}
