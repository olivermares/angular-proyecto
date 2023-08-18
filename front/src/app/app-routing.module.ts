import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MoviesDetailsComponent } from './pages/movies-details/movies-details.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { ActorsDetailsComponent } from './pages/actors-details/actors-details.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },{
    path:'movies', component: MoviesComponent 
  },{
    path:'movies/:id', component: MoviesDetailsComponent
  },{
    path:'actors', component: ActorsComponent
  },{
    path:'actors/:id', component: ActorsDetailsComponent
  },{
    path:'register', component: RegisterComponent
  },

   {
     path:'login', component: LoginComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
