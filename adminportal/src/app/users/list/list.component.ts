import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PortalSyncService } from 'src/app/services/portal-sync.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: any[];
  appVersion: string;
  dataVersion: string;
  userToken: string;

  tabs = [
    {
      label: 'Profile',
      prop: 'userProfile'
    },
    {
      label: 'IAP Receipts',
      prop: 'userIAPReceipts'
    },
    {
      label: 'Offer Receipts',
      prop: 'userOfferReceipts'
    },
    {
      label: 'Social Accounts',
      prop: 'socialAccounts'
    },
    {
      label: 'Log Entries',
      prop: 'logEntries'
    },
    {
      label: 'Ads',
      prop: 'ads'
    },
    {
      label: 'Daily Gift',
      prop: 'dailyGift'
    },
    {
      label: 'FTUE Progress',
      prop: 'ftueProgress'
    },
    {
      label: 'Fuel',
      prop: 'fuel'
    },
    {
      label: 'Cars',
      prop: 'userCars'
    },
    {
      label: 'Augments',
      prop: 'userAugments'
    },
    {
      label: 'Tiers',
      prop: 'userTiers'
    },
    {
      label: 'Resources',
      prop: 'userResources'
    },
    {
      label: 'Fusion Credits',
      prop: 'fusionCredits'
    },
  ];

  constructor(
    private portalSyncService: PortalSyncService,
    private settingsService: SettingsService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userToken = this.authService.user.token;

    this.settingsService.appVersion.subscribe(v => {
      this.appVersion = v
      this.getData();
    });
    this.settingsService.dataVersion.subscribe(v => {
      this.dataVersion = v
      this.getData();
    });

    this.getData();
  }

  getData() {
    this.portalSyncService.getPortalSync(this.appVersion, this.dataVersion, this. userToken).subscribe(data => {
      this.users = [data];
    })
  }
}
