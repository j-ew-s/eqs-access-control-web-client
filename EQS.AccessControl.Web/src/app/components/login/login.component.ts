import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from './../../service/authentication.service';
import { Login } from '../../shared/classes/login';
import { LoginModule } from './login.module';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private service: AuthenticationService,
    private router: Router) {
   
    this.form = this.formBuilder.group({
      username: [''],
      password: ['']
    });

    this.login = new Login(new Object);
  }

  form: FormGroup;
  login: Login;
  loginError: boolean = false;

  ngOnInit() {
  }

  doLogin(item) {
    this.service.login(this.login).subscribe(
      s => {
        let result = s['payload'][0];
        if (result && result.token) {
          this.service.addToLocalStorage(result.token);
          this.router.navigateByUrl('/home');
        }
      },
      e => {
        this.loginError = true;
      });
  }
}
