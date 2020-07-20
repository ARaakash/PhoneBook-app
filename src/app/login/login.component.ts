import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from "./auth.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  username : string;
  password : string;

  isAuthenticated : boolean = false;

  Onsubmit(form : NgForm)
  {
    this.username = form.value["username"];
    this.password = form.value["password"];

    this.isAuthenticated = this.loginService.Login(this.username, this.password);

    if (this.isAuthenticated)
    {
      this.router.navigate(['/phonebook']);
    }
  }
}
