import { PreventLoseUnsavedChanges } from './service/deactivate/prevent-lose-unsaved.service';
import { AuthAdmin } from './service/guard/auth-admin.service';
import { AuthGuard } from './service/guard/auth-guard.service';
import { RoleFormComponent } from './components/role/role-form/role-form.component';
import { RoleListComponent } from './components/role/role-list/role-list.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { Router, RouterModule } from '@angular/router'

import { LoginComponent }    from './components/login/login.component'
import { HomeComponent }     from './components/home/home.component'
import { UserListComponent } from './components/user/user-list/user-list.component';

export const routing = RouterModule.forRoot([
                                                {path : 'login', component: LoginComponent },
                                                {path : 'home', component: HomeComponent },
                                                {path : 'user', component: UserListComponent, 
                                                canActivate: [AuthGuard, AuthAdmin] },
                                                {path : 'user/form/:id', component: UserFormComponent,
                                                canActivate: [AuthGuard, AuthAdmin] ,
                                                canDeactivate: [PreventLoseUnsavedChanges]
                                             },
                                                {path : 'role', component: RoleListComponent,
                                                canActivate: [AuthGuard, AuthAdmin]  },
                                                {path : 'role/form/:id', component: RoleFormComponent,
                                                canActivate: [AuthGuard, AuthAdmin],
                                                canDeactivate: [PreventLoseUnsavedChanges]
                                             },
                                                {path : '**',   component: HomeComponent}
                                            ]);