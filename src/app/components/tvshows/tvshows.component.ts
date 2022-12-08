import { Component, OnInit } from '@angular/core';
import {DataserviceService} from "../../services/dataservice.service";
import {NavbarService} from "../../services/navbar.service";

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {
  searchWord='';
  timeout:any='';
  constructor(private dataService:DataserviceService,
              private navService:NavbarService) { }
  tvshows:any = [];

  ngOnInit(): void {
    if (this.navService.getWord().length >= 3) {
      this.searchWord = this.navService.getWord()
    } else {
      this.searchWord = '';
    }
    this.getTvShows();
    this.navService.show();
  }
  getTvShows() {
    if(this.searchWord.length<3){
    this.dataService.getTopRatedTvshows().subscribe(x=>this.tvshows=x.results.slice(0,10));
    }
    else {
      this.dataService.searchTvShows(this.searchWord).subscribe(x=>this.tvshows=x.results);
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
    this.getTvShows();
  }
}
