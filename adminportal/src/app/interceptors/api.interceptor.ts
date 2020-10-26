import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from "rxjs/index";
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const HTTP_ERROR_CODES = [400, 401, 403, 404, 500, 503];

    return next.handle(request).pipe(
      catchError(event => {
        if (HTTP_ERROR_CODES.includes(event.status)) {
          this.snackBar.open(event.body.message, event.body.stackTrace, {
            duration: 2000,
          });
        }
        return throwError('Connection Error');
      })
    );
  }
}
