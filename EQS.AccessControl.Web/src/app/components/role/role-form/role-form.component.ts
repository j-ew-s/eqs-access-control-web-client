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

  constructor(private route: ActivatedRoute,
    private roleService: RoleService,
    private formBuilder: FormBuilder,
    private router: Router) {

    console.log(" ROLE FORM constructor");
    this.role = new Role(new Object(), this.roleService);

    this.form = this.formBuilder.group({
      id: [''],
      name: ['']
    })
  }

  roleId: number = 0;
  role: Role;
  form: FormGroup;

  ngOnInit() {
    debugger;
    this.roleId = this.route.snapshot.params['id'];
    if (this.roleId !== undefined && this.roleId > -1) {
      this.roleService.getById(this.roleId).subscribe(
        s => {
          let payload = s["payload"][0];
          this.role = new Role(payload, this.roleService);
        }, e => {
          console.log("ERROR");
        }
      );
    }
  }

  onSubmit() {
    if (this.role.id == -1)
      this.create();
    else
      this.update();
  }

  create() {
    this.roleService.create(this.role).subscribe(
      s => {
        console.log("Subscribe ", s);
        this.router.navigateByUrl('/role');
      },
      e => {
        console.log("Error ", e);
      }
    );
  }

  update() {
    this.roleService.update(this.role).subscribe(
      s => {
        console.log("Subscribe ", s);
        this.router.navigateByUrl('/role');
      },
      e => {
        console.log("Error ", e);
      }
    );
  }

}
