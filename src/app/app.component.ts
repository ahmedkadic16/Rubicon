import {Component, OnInit} from '@angular/core';
import {NavbarService} from "./services/navbar.service";
import {Router,NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Rubicon';
  searchFilter:string="";
  currentRoute='';
  constructor(public nav:NavbarService,
              private router:Router) {
  }
  ngOnInit() {
    this.checkRoute();
  }
  checkRoute() {
    this.router.events.subscribe((event) => {event instanceof NavigationEnd ? this.currentRoute=event.url: null     })
  }
}


