import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {User} from '../user.model';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../../config/app-config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userform = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    body: new FormControl('', Validators.required)
  });
  private user: User;
  appConfig: AppConfig;
  constructor(private service: UserService, appConfig: AppConfig) {
    this.appConfig = appConfig;
  }

  ngOnInit() {
  }
  resetForm(form?: FormGroup) {
    if (this.userform != null) {
      this.userform.reset();
      this.user = {
        username: '',
        password: ''
      };
    }

  }
  register() {
    this.service.postUser(this.userform.value, this.appConfig).subscribe((data: any) => {
      // tslint:disable-next-line:triple-equals
      if (data.Succeeded == true) {
        this.resetForm(this.userform);
      }
    });
    }

}
