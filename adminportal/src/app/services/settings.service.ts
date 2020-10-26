import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private appVersionSubject = new BehaviorSubject('');
  private dataVersionSubject = new BehaviorSubject('');

  appVersion = this.appVersionSubject.asObservable();
  dataVersion = this.dataVersionSubject.asObservable();

  constructor() { }

  public setAppVersion(newVersion) {
    this.appVersionSubject.next(newVersion);
  }

  public getAppVersion() {
    return this.appVersionSubject.value;
  }

  public setDataVersion(newVersion) {
    this.dataVersionSubject.next(newVersion);
  }
  public getDataVersion() {
    return this.dataVersionSubject.value;
  }
}
