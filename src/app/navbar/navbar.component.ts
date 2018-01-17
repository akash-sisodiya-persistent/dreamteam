import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuitems: any[] = [{
    "name": "Home",
    "link": "/home"
  }, {
    "name": "Team",
    "link": "/team"
  }, {
    "name": "Player",
    "link": "/player"
  }];
  constructor() { }

  ngOnInit() {
  }

}
