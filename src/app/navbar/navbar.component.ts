import { Component, OnInit } from '@angular/core';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faCloudSunRain = faCloudSunRain;

  constructor() { }

  ngOnInit() {
  }

}
