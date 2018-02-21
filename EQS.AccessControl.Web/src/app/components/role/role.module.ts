import { DeleteModalModule } from './../../shared/delete-modal/delete-modal.module';
import { DeleteModalComponent } from './../../shared/delete-modal/delete-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { RoleListComponent } from './role-list/role-list.component';
import { RoleFormComponent } from './role-form/role-form.component';


@NgModule({
  declarations: [
    RoleListComponent,
    RoleFormComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    
    InfiniteScrollModule,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: []
})
export class RoleModule { }
