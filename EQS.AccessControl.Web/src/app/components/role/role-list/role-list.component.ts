import { Role } from './../../../shared/classes/role';
import { RoleService } from './../../../service/role.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent {

  initial = 30;
  listItems: any[] = [];
  roles: Role[] =[];

  constructor(private roleService : RoleService) {
    this.roleService.getAll().subscribe(result => {
      let roles = result['payload'];
      for(let role of roles){
        debugger;
        this.roles.push(new Role(role));
      }
    })
  }
  
  onScroll() { 
   
  }

}
