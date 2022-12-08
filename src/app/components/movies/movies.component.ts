import {Component, OnInit} from '@angular/core';
import {DataserviceService} from "../../services/dataservice.service";
import {NavbarService} from "../../services/navbar.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  searchWord = '';
  movies: any = [];
  timeout: any = null;

  constructor(private dataService: DataserviceService,
              private navService: NavbarService
  ) {
  }

  ngOnInit(): void {
    if (this.navService.getWord().length >= 3) {
      this.searchWord = this.navService.getWord()
    } else {
      this.searchWord = '';
    }
    this.getMovies();
    this.navService.show();
  }

  private getMovies() {
    if (this.searchWord.length < 3) {
      return this.dataService.getTopRatedMovies().subscribe(x => this.movies = x.results.slice(0, 10))
    } else {
      return this.dataService.searchMovies(this.searchWord).subscribe(x => this.movies = x.results);
    }
  }

  onKeySearch(event: any) {
    this.navService.setWord(this.searchWord);
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      if (event.keyCode != 13) {
        $this.executeListing();
      }
    }, 1000);
  }

  private executeListing() {
    this.getMovies();
  }
}
