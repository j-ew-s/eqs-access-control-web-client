import { SearchObject } from './../../../shared/classes/search-object';
import { SuccessHandler } from './../../../service/handler/response/SucessHandler';
import { Router } from '@angular/router';
import { User } from './../../../shared/classes/user';
import { UserService } from './../../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { 
    this.searchObject = new SearchObject(new Object());
    this.searchObject.itemQuantity = this.initial = 30;
    this.getUsers();
  }

  initial = 30;
  users: User[] = [];
  successHandler: SuccessHandler;
  searchObject: SearchObject;

  ngOnInit() {
    this.getUsers();
  }

  onScroll() {
    this.initial += 30;
    this.getUsers();
  }

  getUsers() {
    this.searchObject.itemQuantity = this.initial;
    this.searchObject.order = "";
    this.searchObject.textTerm = "";

    this.userService.getAllFilter(this.searchObject).subscribe(result => {
     
      let userResult;
      this.successHandler = new SuccessHandler(result);
     
      if (!this.successHandler.error())
        userResult = this.successHandler.payload()[0];

      for (let user of userResult) {
        this.users.push(new User(user));
      }

    });
  }

  navigateToForm(user: number) {
    let route = "user/form/" + user.toString();
    this.router.navigateByUrl(route);
  }

  delete(item: any) {
    this.userService.delete(item["id"]).subscribe(result => {
      this.successHandler = new SuccessHandler(result);
      if (!this.successHandler.error())
        this.getUsers();
    });
  }

}
