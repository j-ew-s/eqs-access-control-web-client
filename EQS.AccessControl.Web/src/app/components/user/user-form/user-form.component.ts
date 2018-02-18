import { User } from './../../../shared/classes/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../../service/user.service';
import { CredentialComponent } from './../../credential/credential.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

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

  public messageStyle : string;
  public message: string;

  @ViewChild(CredentialComponent) credentialView;

  constructor(private _fb: FormBuilder, private service: UserService, private router: Router,
      private route: ActivatedRoute) {

      this.form = this._fb.group({
          name: ['', Validators.required],
          username:    [''],
          password:   [''],
          passwordConfirm:  [''], 
          credential: this._fb.array([])
      });

      this.user = new User(new Object);
  }

  isFormDirty() {
      return this.form.dirty;
  }

  ngOnInit() {
      this.userId = this.route.snapshot.params['id'];
      if (this.userId !== undefined) {
          this.isLoading = true;
          this.service.getById(this.userId).subscribe(
              s => {
                  this.user = new User(s);
                  this.isLoading = false;
              }, e => {
                  this.isLoading = false;
              }
          );
      }
  }

  sendMessage(success:boolean){
      this.messageStyle = success ? 'success': 'error';
      this.message = success ? 'Item saved!' : 'Ouch! An error happens during your action. Please get in touch with the Admin.'
  }

  onSubmit() {
    /*  this.isSaveMethod = true;
      if (this.item.id <= 0) {
          this._service.postUser(this.item).subscribe(
              s => {
                  this.router.navigateByUrl('user'),
                      console.log("created ", s),
                      this.toastrService.success('Hello world!', 'Toastr fun!')                 
              },
              e => {
                  console.log("error ", e)
              }
          );
      }
      else {
          this._service.putUser(this.item).subscribe(
              s => {
                  this.router.navigateByUrl('user'),
                      console.log("updated ", s),
                      this.toastrService.success('Hello world!', 'Toastr fun!')
              },
              e => {
                  console.log("error ", e)
              }
          );
      }*/
  }
}
