import { SearchObject } from './../../../shared/classes/search-object';
import { SuccessHandler } from './../../../service/handler/response/SucessHandler';
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
  roles: Role[] = [];
  successHandler: SuccessHandler;
  searchObject: SearchObject;

  constructor(private roleService: RoleService, private router: Router) {
    this.searchObject = new SearchObject(new Object());
    this.searchObject.itemQuantity = this.initial;
    this.getRoles();
  }

  ngOnChanges() { }

  onScroll() {
    this.initial += 30;
    this.getRoles();
  }

  search() {
    this.getRoles();
  }

  getRoles() {
    debugger;
    this.searchObject.itemQuantity = this.initial;
    this.searchObject.order= "";
    this.searchObject.textTerm = "";

    this.roleService.getAllFilter(this.searchObject).subscribe(result => {

      this.successHandler = new SuccessHandler(result);
      let roles;
      this.roles = [];

      if (!this.successHandler.error())
        roles = this.successHandler.payload()[0];

      for (let role of roles) {
        this.roles.push(new Role(role));
      }

    });
  }

  navigateToForm(roleId: number) {
    let route = "role/form/" + roleId.toString();
    this.router.navigateByUrl(route);
  }

}
