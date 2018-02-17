import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { HomeModule } from './components/home/home.module';
import { LeftSideMenuModule } from './components/left-side-menu/left-side-menu.module';
import { LoginModule } from './components/login/login.module';
import { RoleModule } from './components/role/role.module';
import { UserModule } from './components/user/user.module';

import { AuthenticationService } from './service/authentication.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    HttpClientModule,
    HttpModule,
    LeftSideMenuModule,
    LoginModule, 
    RoleModule, 
    routing,
    UserModule,
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
