import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  envId = environment.id.toLowerCase();

  constructor() { }

  ngOnInit(): void {
  }
}
