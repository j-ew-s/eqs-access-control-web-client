import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import 'jquery';
import 'bootstrap';
declare var $: any;

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  public entity: any;
  public name: string;
  @Output() deleteEmitter = new EventEmitter<any[]>();
  
  constructor() { }

  ngOnInit() { }

  Init(entity: any) {
    this.entity = entity;
    this.name = this.entity["name"] ? this.entity["name"] : "";
    $('#deleteModal').modal('show');
  }

  delete() {
    return this.deleteEmitter.emit(this.entity);
  }
}
