import { SuccessHandler } from './../../../service/handler/response/SucessHandler';
import { BadInput } from './../../../shared/common/error/bad-input-error';
import { NotFoundError } from './../../../shared/common/error/notfound-error';
import { AppError } from './../../../shared/common/error/base/app-error';
import { BaseController } from './../../../shared/base-controller/base-controller.interface';
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
export class RoleFormComponent implements BaseController, OnInit {

  constructor(private route: ActivatedRoute,
    private roleService: RoleService,
    private formBuilder: FormBuilder,
    private router: Router) {

    this.role = new Role(new Object());

    this.form = this.formBuilder.group({
      id: [''],
      name: ['']
    })
  }

  isSaveMethod: Boolean = false;
  roleId: number = 0;
  role: Role;
  form: FormGroup;
  successHandler: SuccessHandler;

  isFormDirty(): Boolean {
    return this.form.dirty
  }

  ngOnInit() {
    this.roleId = this.route.snapshot.params['id'];
    if (this.roleId !== undefined && this.roleId > -1) {
      this.roleService.getById(this.roleId).subscribe(
        s => {
          this.successHandler = new SuccessHandler(s);
          if (!this.successHandler.error())
            this.role = new Role(this.successHandler.payload()[0]);
          else
            this.form.setErrors(this.successHandler.messages);
        },
        (e: AppError) => {
          if (e instanceof NotFoundError)
            alert('No Role found');
          else throw e;
        }
      );
    }
  }

  onSubmit() {
    this.isSaveMethod = true;
    if (this.role.id == -1)
      this.create();
    else
      this.update();
  }

  create() {
    this.roleService.create(this.role).subscribe(
      s => {
        this.successSaveHandler(s);
      },
      (e: AppError) => {
        this.errorSaveHandler(e);
      }
    );
  }

  update() {
    this.roleService.update(this.role).subscribe(
      s => {
        this.successSaveHandler(s);
      },
      (e: AppError) => {
        this.errorSaveHandler(e);
      }
    );
  }


  private successSaveHandler(s) {
    this.successHandler = new SuccessHandler(s);
    if (!this.successHandler.error())
      this.router.navigateByUrl('role');
    else
      this.form.setErrors(this.successHandler.messages());
  }

  private errorSaveHandler(error) {
    if (error instanceof BadInput)
      alert('No Role found');
    else throw error;
  }
}
