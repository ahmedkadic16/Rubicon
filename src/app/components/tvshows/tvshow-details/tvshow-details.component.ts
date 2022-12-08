import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataserviceService} from "../../../services/dataservice.service";
import { Location} from '@angular/common';
import {NavbarService} from "../../../services/navbar.service";
@Component({
  selector: 'app-tvshow-details',
  templateUrl: './tvshow-details.component.html',
  styleUrls: ['./tvshow-details.component.css']
})
export class TvshowDetailsComponent implements OnInit {
  tvshow?: any;
  key:string="";
  videoKey='';
  player:any;
  width=1300;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private dataservis:DataserviceService,
              private nav:NavbarService) { }

  ngOnInit(): void {
    this.getShow();
    this.nav.toggle();
  }
  getShow(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataservis.getTvshow(id)
      .subscribe(x => this.tvshow = x);
    this.dataservis.getTvshowVideos(id).subscribe(x=>this.videoKey=x.results.filter((x:any)=>x.type.toLowerCase()==='trailer')[0].key);
  }
  goBack() {
    this.location.back();
    this.nav.toggle();
  }
  savePlayer(player:any) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event:any) {
    console.log('player state', event.data);
  }
}
