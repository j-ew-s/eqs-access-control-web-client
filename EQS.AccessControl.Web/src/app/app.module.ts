import { DeleteModalComponent } from './shared/delete-modal/delete-modal.component';
import { GlobalErrorHandler } from './service/handler/error/GlobalErrorHandler';
import { AuthAdmin } from './service/guard/auth-admin.service';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { HomeModule } from './components/home/home.module';
import { LoginModule } from './components/login/login.module';
import { RoleModule } from './components/role/role.module';
import { UserModule } from './components/user/user.module';

import { AuthenticationService } from './service/authentication.service';
import { UserService } from './service/user.service';
import { RoleService } from './service/role.service';

import { AppComponent } from './app.component';
import { LeftSideMenuComponent } from './components/left-side-menu/left-side-menu.component';
import { AuthGuard } from './service/guard/auth-guard.service';
import { PreventLoseUnsavedChanges } from './service/deactivate/prevent-lose-unsaved.service';
import { DeleteModalModule } from './shared/delete-modal/delete-modal.module';


@NgModule({
  declarations: [
    AppComponent,
    LeftSideMenuComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,    HttpClientModule,    HttpModule,
    LoginModule, 
    MultiselectDropdownModule,
    RoleModule,    routing,
    UserModule
  ],
  providers: [
    AuthAdmin,    
    AuthenticationService, 
    AuthGuard,
    PreventLoseUnsavedChanges,
    RoleService,
    UserService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
