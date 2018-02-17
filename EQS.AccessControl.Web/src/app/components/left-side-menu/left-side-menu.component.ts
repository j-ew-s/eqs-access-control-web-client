import { Router } from '@angular/router';
import { AuthenticationService } from './../../service/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.css']
})
export class LeftSideMenuComponent {

  areaPermissions: any[] = [];
  rolesActive : boolean;
  userActive : boolean;
  homeActive : boolean;
  logoutActive : boolean;

  constructor(private loginService: AuthenticationService,private _router : Router) {
    this.areaPermissions = [
      { 'area': 'Home', 'permissions': ["admin", "rh", "developer"] },
      { 'area': 'Users', 'permissions': ["admin", "rh"] },
      { 'area': 'Roles', 'permissions': ["admin", "rh"] }
    ];

  }

  onClick(){
     this._router.isActive('roles',this.rolesActive);
     this._router.isActive('user',this.userActive);
     this._router.isActive('home',this.homeActive);
     this._router.isActive('logout',this.logoutActive);
  }

  isVisible(area: string) {
    let isNotExpired = this.loginService.isTokenNotExpired();
    let roles = this.loginService.getCurrentUserRoles();
    if(!roles) return false;
    return this.areaPermission(area, roles) && isNotExpired;
  }

  areaPermission(area, roles: any[]) {
    let areaConfig = this.areaPermissions.filter(f => f.area == area);
    let permissions: string[] = areaConfig[0]['permissions'];
    let a = roles.indexOf(permissions.filter(f => f));

    for (let role of roles) {
      if (permissions.filter(f => { f == role})) {
       return true;
      }
    }
  }

}
