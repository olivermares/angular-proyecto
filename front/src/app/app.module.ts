import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/utils/header/header.component';
import { FooterComponent } from './shared/utils/footer/footer.component';

import { MoviesComponent } from './pages/movies/movies.component';
import { MoviesDetailsComponent } from './pages/movies-details/movies-details.component';

import { ActorsComponent } from './pages/actors/actors.component';
import { ActorsDetailsComponent } from './pages/actors-details/actors-details.component';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { InfoComponent } from './shared/components/info/info.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

import { RouterModule } from '@angular/router';
import { SecurePageAccessComponent } from './pages/secure-page-access/secure-page-access.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    MoviesDetailsComponent,
    ActorsComponent,
    ActorsDetailsComponent,
    InfoComponent,
    RegisterComponent,
    LoginComponent,
    SecurePageAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
