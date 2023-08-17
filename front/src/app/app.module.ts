import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/utils/header/header.component';
import { FooterComponent } from './shared/utils/footer/footer.component';

import { FilmsComponent } from './pages/films/films.component';
import { FilmDetailsComponent } from './pages/film-details/film-details.component';
import { FilmEditComponent } from './pages/film-edit/film-edit.component';
import { FilmDropComponent } from './pages/film-drop/film-drop.component';

import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { CharacterEditComponent } from './pages/character-edit/character-edit.component';
import { CharacterDropComponent } from './pages/character-drop/character-drop.component';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { InfoComponent } from './shared/components/info/info.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    FilmsComponent,
    FilmDetailsComponent,
    CharactersComponent,
    CharacterDetailsComponent,
    InfoComponent,
    FilmEditComponent,
    FilmDropComponent,
    CharacterEditComponent,
    CharacterDropComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
