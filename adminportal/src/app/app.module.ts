import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VersionsSelectorComponent } from './components/versions-selector/versions-selector.component';
import { LogoComponent } from './components/logo/logo.component';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    MainNavComponent,
    HeaderComponent,
    VersionsSelectorComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
