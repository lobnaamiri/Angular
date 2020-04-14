import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user.model';
import {AppConfig} from '../../config/app-config';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http: HttpClient) { }

  postUser(user: User, app: AppConfig) {
    const body: User = {
      username: user.username,
      password: user.password
    };
    alert(app.baseUrl);
    return this.http.post(app.baseUrl + '/user', body);
  }
}
