import {Component, forwardRef, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {DataserviceService} from "../../../services/dataservice.service";
import {NavbarService} from "../../../services/navbar.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie?: any;
  videoKey='';
  player: any;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private dataservis:DataserviceService,
              private navService:NavbarService) {

  }
  ngOnInit(): void {
    this.getMovie();
    this.navService.hide();
  }
  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataservis.getMovieVideos(id).subscribe(x=>this.videoKey=x.results.filter((x:any)=>x.type.toLowerCase()==='trailer')[0].key);
    this.dataservis.getMovie(id).subscribe(x => this.movie = x);
  }
  goBack() {
    this.location.back();
    this.navService.show();
  }
  savePlayer(player:any) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event:any) {
    console.log('player state', event.data);
  }
}
