import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesComponent} from "./components/movies/movies.component";
import {MovieDetailsComponent} from "./components/movies/movie-details/movie-details.component";
import {TvshowsComponent} from "./components/tvshows/tvshows.component";
import {TvshowDetailsComponent} from "./components/tvshows/tvshow-details/tvshow-details.component";

const routes: Routes = [
  { path: '', redirectTo: '/tvshows', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent},
  { path: 'movie/:id', component: MovieDetailsComponent },
  {  path: 'tvshows', component: TvshowsComponent },
  { path: 'tvshow/:id', component: TvshowDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
