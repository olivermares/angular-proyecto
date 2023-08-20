import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MoviesDetailsComponent } from './pages/movies-details/movies-details.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { ActorsDetailsComponent } from './pages/actors-details/actors-details.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponentComponent } from './pages/not-found-component/not-found-component.component';
import { authGuard } from './shared/guards/auth.guard';
import { SecurePageAccessComponent } from './pages/secure-page-access/secure-page-access.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent
  },{
    path:'movies', component: MoviesComponent 
  },{
    path:'movies/:id', component: MoviesDetailsComponent, canActivate: [authGuard]
  },{
    path:'actors', component: ActorsComponent
  },{
    path:'actors/:id', component: ActorsDetailsComponent , canActivate: [authGuard]
  },{
    path:'register', component: RegisterComponent 
  },{
     path:'login', component: LoginComponent
   },

  // // Si no encuntra la ruta, redirige a /404
  // {  
  //   path: '**', redirectTo: '/404'
  // },

  // // Pagina 404. Se muestra si no se encuentra la ruta. 
  // {  
  //  path: '404', component: NotFoundComponentComponent
  // },

  {  
    path: 'securedPage', component: SecurePageAccessComponent
   },
   
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
