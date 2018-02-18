import { Router } from '@angular/router';
import { Role } from './../../../shared/classes/role';
import { RoleService } from './../../../service/role.service';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnChanges {

  initial = 30;
  listItems: any[] = [];
  roles: Role[] =[];

  constructor(private roleService : RoleService,
    private router: Router) {

    this.roleService.getAll().subscribe(result => {
      let roles = result['payload'][0];
      for(let role of roles){
        this.roles.push(new Role(role));
      }
    });
  }

  ngOnChanges(){ }
  
  onScroll() { 
   
  }

  navigateToForm(roleId:number){
    let route = "role/form/"+roleId.toString();
    this.router.navigateByUrl(route);
  }

}
