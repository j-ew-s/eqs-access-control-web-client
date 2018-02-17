import {Router, RouterModule} from '@angular/router'

import { LoginComponent }    from './components/login/login.component'
import { HomeComponent }     from './components/home/home.component'
import { UserListComponent } from './components/user/user-list/user-list.component';


export const routing = RouterModule.forRoot([
                                                {path : 'login', component: LoginComponent },
                                                {path : 'home', component: HomeComponent },
                                                {path : 'user', component: UserListComponent },
                                                {path : '**',   component: HomeComponent}
                                            ]);