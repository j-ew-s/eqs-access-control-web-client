import { FormBuilder, FormGroup } from '@angular/forms';
import { Role } from './../../../shared/classes/role';
import { RoleService } from './../../../service/role.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {

  constructor(private route : ActivatedRoute,
              private roleService : RoleService,
              private formBuilder : FormBuilder) {
                console.log(" ROLE FORM constructor");
    this.role = new Role(new Object());

    this.form = this.formBuilder.group({
      id : [''],
      name : ['']
    })
  }

  roleId : number = 0;
  role : Role;
  form : FormGroup;

  ngOnInit() {
    debugger;
    console.log(" ROLE FORM ONINIT");
    this.roleId = this.route.snapshot.params['id'];
    console.log(" ROLE FORM ONINIT PARAM ",this.roleId );
    if (this.roleId !== undefined) {
      this.roleService.getById(this.roleId).subscribe(
          s => {
              this.role = new Role(s);
            // this.isLoading = false;
          }, e => {
            // this.isLoading = false;
          }
      );
    }
  }

  onSubmit(){
    console.log("Role ", this.role);
    debugger;
  }

}
