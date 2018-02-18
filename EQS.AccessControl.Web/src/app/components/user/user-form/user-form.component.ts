import { RoleService } from './../../../service/role.service';
import { Role } from './../../../shared/classes/role';
import { User } from './../../../shared/classes/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../../service/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

    public isSaveMethod = false;
    public form: FormGroup;
    public user: User;
    public userId: number;
    public isLoading: boolean = false;

    roles: number[];
    options: IMultiSelectOption[];

    public messageStyle: string;
    public message: string;

    constructor(private _fb: FormBuilder,
        private service: UserService,
        private roleService: RoleService,
        private router: Router,
        private route: ActivatedRoute) {

        this.form = this._fb.group({
            name: ['', Validators.required],
            username: [''],
            password: [''],
            passwordConfirm: [''],
            roles: [''],
        });

        this.user = new User(new Object);
    }

    isFormDirty() {
        return this.form.dirty;
    }

    ngOnInit() {
        this.userId = this.route.snapshot.params['id'];
        this.roleService.getAll().subscribe(
            s => {
                let roles = s['payload'][0];
                let optionRoles : any[] = [];
                for (let role of roles) {
                   optionRoles.push(new Role(role));
                }
                this.options = optionRoles;
                this.loadUser();
            }
        );
    }

    loadUser(){
        if (this.userId !== undefined && this.userId > 0) {
            this.isLoading = true;
            this.service.getById(this.userId).subscribe(
                s => {
                    let payload = s["payload"][0];
                    this.user = new User(payload);
                    this.roles = this.user.roles.map(function(item) {
                        return item.id;
                    });
                    this.isLoading = false;
                }, e => {
                    this.isLoading = false;
                }
            );
        }
    }

    onChange() {   
        
     }

    onSubmit() {
        debugger;
        this.user.roles = this.roles;
        console.log("USER saving ", this.user);

          if (this.user.id <= 0) {
              this.service.create(this.user).subscribe(
                  s => {
                      this.router.navigateByUrl('user')
                  },
                  e => {
                      console.log("error ", e)
                  }
              );
          }
          else {
              this.service.update(this.user).subscribe(
                  s => {
                      this.router.navigateByUrl('user')
                  },
                  e => {
                      console.log("error ", e)
                  }
              );
          }
    }
}
