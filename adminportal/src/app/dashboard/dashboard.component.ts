import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  appVersion: string;
  dataVersion: string;
  env = environment.id

  constructor(
    private settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    this.settingsService.appVersion.subscribe(v => {
      this.appVersion = v
    });
    this.settingsService.dataVersion.subscribe(v => {
      this.dataVersion = v
    });
  }
}
