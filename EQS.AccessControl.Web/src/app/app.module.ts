import { CredentialComponent } from './components/credential/credential.component';
import { UserService } from './service/user.service';
import { RoleService } from './service/role.service';
import { LeftSideMenuComponent } from './components/left-side-menu/left-side-menu.component';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { HomeModule } from './components/home/home.module';
import { LoginModule } from './components/login/login.module';
import { RoleModule } from './components/role/role.module';
import { UserModule } from './components/user/user.module';

import { AuthenticationService } from './service/authentication.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftSideMenuComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,    HttpClientModule,    HttpModule,
    LoginModule, 
    RoleModule,    routing,
    UserModule
  ],
  providers: [
    AuthenticationService, 
    RoleService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
