import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeModule } from './components/home/home.module';
import { LeftSideMenuModule } from './components/left-side-menu/left-side-menu.module';
import { LoginModule } from './components/login/login.module';
import { RoleComponent } from './components/role/role.component';
import { UserModule } from './components/user/user.module';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    LeftSideMenuModule,
    LoginModule, 
    RoleComponent, 
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
