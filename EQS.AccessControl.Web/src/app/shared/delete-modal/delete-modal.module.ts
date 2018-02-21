import { DeleteModalComponent } from './delete-modal.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule, 
    InfiniteScrollModule,
    MultiselectDropdownModule,
    ReactiveFormsModule,
  ],
  providers: []
})
export class DeleteModalModule { }
