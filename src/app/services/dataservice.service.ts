import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private tvshowsUrl="https://api.themoviedb.org/3/tv/";
  private moviesUrl="https://api.themoviedb.org/3/movie/";
  private movieSearchUrl="https://api.themoviedb.org/3/search/movie?api_key=58bd92e593ee45fa334bc8894e70311a&language=en-US&query=";
  private tvshowSearchUrl="https://api.themoviedb.org/3/search/tv?api_key=58bd92e593ee45fa334bc8894e70311a&language=en-US&page=1&query=";
  private apiKey = "?api_key=58bd92e593ee45fa334bc8894e70311a&language=en-US&page=1";

  constructor(private httpClient:HttpClient) { }
  searchFilter='';
  getTopRatedMovies():Observable<any> {
   return this.httpClient.get<any>(this.moviesUrl+"top_rated"+this.apiKey);
  }
  getTopRatedTvshows():Observable<any> {
    return this.httpClient.get<any>(this.tvshowsUrl+"top_rated"+this.apiKey);
  }
  getMovie(id:number):Observable<any> {
  return this.httpClient.get<any>(this.moviesUrl+id+this.apiKey);
  }
  getTvshow(id:number):Observable<any> {
    return this.httpClient.get<any>(this.tvshowsUrl+id+this.apiKey);
  }
  getMovieVideos(id:number):Observable<any> {
    return this.httpClient.get<any>(this.moviesUrl+id+"/videos"+this.apiKey);
  }
  getTvshowVideos(id:number):Observable<any> {
    return this.httpClient.get<any>(this.tvshowsUrl+id+"/videos"+this.apiKey);
  }
  searchMovies(searchWord:string):Observable<any> {
    return this.httpClient.get<any>(this.movieSearchUrl+searchWord+"&page=1&include_adult=false");
  }
  searchTvShows(searchWord:string):Observable<any> {
    return this.httpClient.get<any>(this.tvshowSearchUrl+searchWord+"&include_adult=false");
  }

}
