import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { SettingsService } from '../services/settings.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private settingService: SettingsService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const currentUser = this.authService.user;
    const appVersion = this.settingService.getAppVersion();
    const dataVersion = this.settingService.getDataVersion();

    if (currentUser) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${currentUser.token}`,
            AppVersion: appVersion,
            DataVersion: dataVersion,
          }
        });

        return next.handle(request);
    } else {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }
}
