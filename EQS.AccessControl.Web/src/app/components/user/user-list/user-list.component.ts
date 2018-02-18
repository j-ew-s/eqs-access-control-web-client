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

  constructor(private userService : UserService, private router : Router ) { }

  initial = 0;
  users : User[] = [];
  
  ngOnInit() {
    this.getUsers();
   }
  
  onScroll() { 
    // add another 20 items
    this.initial += 20;
  }

  getUsers(){
    this.userService.getAll().subscribe(result => {
      let userResult = result['payload'][0];
      for(let user of userResult){
        this.users.push(new User(user));
      }
    });
  }

  navigateToForm(user:number){
    let route = "user/form/"+user.toString();
    this.router.navigateByUrl(route);
  }

}
