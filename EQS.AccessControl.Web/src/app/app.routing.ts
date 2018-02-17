import { RoleFormComponent } from './components/role/role-form/role-form.component';
import { RoleListComponent } from './components/role/role-list/role-list.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import {Router, RouterModule} from '@angular/router'

import { LoginComponent }    from './components/login/login.component'
import { HomeComponent }     from './components/home/home.component'
import { UserListComponent } from './components/user/user-list/user-list.component';


export const routing = RouterModule.forRoot([
                                                {path : 'login', component: LoginComponent },
                                                {path : 'home', component: HomeComponent },
                                                {path : 'user', component: UserListComponent },
                                                {path : 'user-form', component: UserFormComponent },
                                                {path : 'role', component: RoleListComponent },
                                                {path : 'role-form', component: RoleFormComponent },
                                                {path : '**',   component: HomeComponent}
                                            ]);