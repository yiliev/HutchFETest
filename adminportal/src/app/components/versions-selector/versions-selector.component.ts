import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-versions-selector',
  templateUrl: './versions-selector.component.html',
  styleUrls: ['./versions-selector.component.scss']
})
export class VersionsSelectorComponent implements OnInit {
  appVersions = ['1.1', '1.2', '1.3'];
  appVersion = this.appVersions[0];

  dataVersions = [ '2.4', '2.5', '2.6'];
  dataVersion = this.dataVersions[0];

  constructor(
    private settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    this.settingsService.appVersion.subscribe(v => this.appVersion = v);
    this.settingsService.dataVersion.subscribe(v => this.dataVersion = v);

    if (!this.appVersion) {
      this.appVersion = this.appVersions[0];
      this.setAppVersion();
    }

    if (!this.dataVersion) {
      this.dataVersion = this.dataVersions[0];
      this.setDataVersion();
    }
  }

  setAppVersion() {
    this.settingsService.setAppVersion(this.appVersion);
  }

  setDataVersion() {
    this.settingsService.setDataVersion(this.dataVersion);
  }
}
