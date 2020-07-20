import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import {FormsModule} from '@angular/forms';
import { AuthService } from './login/auth.service';
import { AuthGaurd } from './auth-gaurd.service';
import { LoginGaurdService } from './login-gaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    PhonebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService,AuthGaurd,LoginGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
