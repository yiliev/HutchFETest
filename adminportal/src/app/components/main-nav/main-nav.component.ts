import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  links = [
    {
      path: 'users',
      label: 'Users'
    },
    {
      path: 'offers',
      label: 'Offers'
    },
    {
      path: 'events',
      label: 'Events'
    },
    {
      path: 'a-b-testing',
      label: 'A/B Testing'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
