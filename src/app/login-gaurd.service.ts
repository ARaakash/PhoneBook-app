import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router'
import {AuthService} from './login/auth.service'
import { Observable, Subject, Subscription } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginGaurdService implements CanActivate, OnDestroy {

  constructor(private authservice : AuthService , private router : Router) { }

  isLoggedin: boolean = false
    private userSub : Subscription;

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

  canActivate(route: ActivatedRouteSnapshot,
     state : RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean | Subject<boolean>
  {

    this.userSub = this.authservice.LoginStatus.subscribe(
      (isAuthenticated) => { this.isLoggedin = isAuthenticated; });

      if(this.isLoggedin) 
      {
        this.router.navigate(['/phone'])
        return false
      } else {
        return true;
      }  
  }
}
