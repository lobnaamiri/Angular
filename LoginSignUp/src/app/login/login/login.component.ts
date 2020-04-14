import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: NgForm;
  constructor(public service: UserService) { }
  ngOnInit() {
  }

  login(loginForm: NgForm) {    }

}
