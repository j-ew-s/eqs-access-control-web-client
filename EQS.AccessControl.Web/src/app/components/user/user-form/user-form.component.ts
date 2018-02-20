import { BadInput } from './../../../shared/common/error/bad-input-error';
import { NotFoundError } from './../../../shared/common/error/notfound-error';
import { AppError } from './../../../shared/common/error/base/app-error';
import { SuccessHandler } from './../../../service/handler/response/SucessHandler';
import { BaseController } from './../../../shared/base-controller/base-controller.interface';
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
export class UserFormComponent implements BaseController, OnInit {

    public isSaveMethod = false;
    public form: FormGroup;
    public user: User;
    public userId: number;
    public isLoading: boolean = false;

    roles: number[];
    options: IMultiSelectOption[];
    successHandler: SuccessHandler;

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
                this.successHandler = new SuccessHandler(s);
                let roles;

                if (!this.successHandler.error())
                    roles = this.successHandler.payload()[0];
                else
                    this.form.setErrors(this.successHandler.messages);

                let optionRoles: any[] = [];
                for (let role of roles) {
                    optionRoles.push(new Role(role));
                }
                this.options = optionRoles;
                this.loadUser();
            }
            , (error: AppError) => {
                if (error instanceof NotFoundError)
                    alert('No Role found');
                else throw error;
            }
        );
    }

    loadUser() {
        if (this.userId !== undefined && this.userId > 0) {
            this.isLoading = true;
            this.service.getById(this.userId).subscribe(
                s => {
                    this.successHandler = new SuccessHandler(s);

                    if (!this.successHandler.error())
                        this.user = new User(this.successHandler.payload()[0]);
                    else
                        this.form.setErrors(this.successHandler.messages);

                    this.roles = this.user.roles.map(function (item) { return item.id; });
                    this.isLoading = false;
                }, (error: AppError) => {
                    if (error instanceof NotFoundError)
                        alert('No Role found');
                    else throw error;
                }
            );
        }
    }

    onChange() { }

    onSubmit() {
        this.isSaveMethod = true;
        this.user.roles = this.roles;
        if (this.user.id <= 0) {
            this.create();
        }
        else {
            this.update();
        }
    }

    create() {
        this.service.create(this.user).subscribe(
            success => { this.successSaveHandler(success) },
            (error: AppError) => { this.errorSaveHandler(error) }
        );
    }

    update() {
        this.service.update(this.user).subscribe(
            success => { this.successSaveHandler(success) },
            (error: AppError) => { this.errorSaveHandler(error) }
        );
    }

    private successSaveHandler(s) {
        this.successHandler = new SuccessHandler(s);
        if (!this.successHandler.error())
            this.router.navigateByUrl('user');
        else
            this.form.setErrors(this.successHandler.messages());
    }

    private errorSaveHandler(error) {

        if (error instanceof BadInput)
            alert('No Role found');
        else throw error;

    }
}
