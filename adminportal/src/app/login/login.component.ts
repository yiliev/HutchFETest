import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.authService.user) {
      this.router.navigate(['/']);
    }

    this.loading = false;

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;

      this.authService.login(
        this.loginForm.value.username,
        this.loginForm.value.password
      ).pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['/dashboard']);
          },
          error => {
            console.error(error);
          },
          () => {
            this.loading = false;
          }
        );
    }
  }
}
