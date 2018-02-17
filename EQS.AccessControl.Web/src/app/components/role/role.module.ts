import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoleListComponent } from './role-list/role-list.component';
import { RoleFormComponent } from './role-form/role-form.component';


@NgModule({
  declarations: [
    RoleListComponent,
    RoleFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class RoleModule { }
