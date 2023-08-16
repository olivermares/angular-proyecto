import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { FilmsComponent } from './pages/films/films.component';
import { FilmDetailsComponent } from './pages/film-details/film-details.component';
import { FilmEditComponent } from './pages/film-edit/film-edit.component';
import { FilmDropComponent } from './pages/film-drop/film-drop.component';

import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { CharacterEditComponent } from './pages/character-edit/character-edit.component';
import { CharacterDropComponent } from './pages/character-drop/character-drop.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },{
    path:'films', component: FilmsComponent 
  },{
    path:'films/:id', component: FilmDetailsComponent
  },{
    path:'films/edit', component: FilmEditComponent
  },{
    path:'films/drop', component: FilmDropComponent
  },{
    path:'characters', component: CharactersComponent
  },{
    path:'characters/:id', component: CharacterDetailsComponent
  },{
    path:'characters/edit', component: CharacterEditComponent
  },{
    path:'characters/drop', component: CharacterDropComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
