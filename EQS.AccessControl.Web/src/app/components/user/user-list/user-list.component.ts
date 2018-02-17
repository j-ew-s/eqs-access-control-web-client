import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any[] = [];
  
  ngOnInit() {
  }
  
  initial = 0;
  listItems: any[] = [];
  
  constructor() {
    for (let i = 0; i < this.initial; i++) {
      this.users.push({"name": "Name "+i, "username" : "username_"+i, "lastUpdate": "asas"});
    }
  }
  
  onScroll() { 
    // add another 20 items
    this.initial += 20;
    for (let i = 0; i < this.initial; i++) {
      this.users.push({"name": "Name "+i, "username" : "username_"+i, "lastUpdate": "asas"});
    }
  }

}
