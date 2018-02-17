import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class UserModule { }
