import { Component, OnInit } from '@angular/core';
import { faAt, faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faAt = faAt;
  faLink = faLink;
  constructor() { }

  ngOnInit() {
  }

}
