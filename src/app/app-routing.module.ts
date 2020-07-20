import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import {AuthGaurd} from 'src/app/auth-gaurd.service'
import { LoginGaurdService } from './login-gaurd.service';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login',canActivate:[LoginGaurdService], component: LoginComponent, },
  {path:'phone', canActivate: [AuthGaurd], component: PhonebookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
