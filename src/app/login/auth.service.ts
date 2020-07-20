import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  LoginStatus = new Subject<boolean>();
  username = "aakash";
  password = "aakash";


  constructor(private router : Router) { }

  Login(username : string, password : string)
  {
      if (this.username == username && this.password == password)
      {
        this.LoginStatus.next(true);
        return true;
      }
      else {
        this.LoginStatus.next(false);
        return false;
      }
  }

  logout() {
    this.LoginStatus.next(false)
}
}
