import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { TvshowsComponent } from './components/tvshows/tvshows.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TvshowDetailsComponent} from "./components/tvshows/tvshow-details/tvshow-details.component";
import {NavbarService} from "./services/navbar.service";
import {NgxYoutubePlayerModule} from 'ngx-youtube-player';
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailsComponent,
    TvshowsComponent,
    TvshowDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [
    NavbarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
