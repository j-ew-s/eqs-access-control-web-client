import {Router, RouterModule} from '@angular/router'

import { LoginComponent }    from './components/login/login.component'
import { HomeComponent }     from './components/home/home.component'

export const routing = RouterModule.forRoot([
                                                {path : 'login', component: LoginComponent },
                                                {path : 'home', component: HomeComponent },
                                                {path : '**',   component: HomeComponent}
                                            ]);