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
  loginActive : boolean;

  constructor(private loginService: AuthenticationService,
    private router : Router) {
    this.areaPermissions = [
      { 'area': 'Users', 'permissions': ["Admin", "RH"] },
      { 'area': 'Roles', 'permissions': ["Admin", "RH"] }
    ];
    this.setMenuactive();
  }

  onClick(){
    this.setMenuactive();
  }

  setMenuactive(){
    this.rolesActive =  this.router.isActive('role',this.rolesActive);
    this.userActive  =  this.router.isActive('user',this.userActive);
    this.homeActive  =  this.router.isActive('home',this.homeActive);
    this.loginActive =  this.router.isActive('login',this.loginActive);
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

  doLogout(){
    this.loginService.removeFromLocalStorage();
    this.router.navigateByUrl('/home');
  }

}
