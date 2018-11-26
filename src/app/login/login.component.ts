import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {AuthService} from '../auth/auth.service';
import {TokenStorage} from '../auth/token.storage';
import * as jwt_decode from 'jwt-decode';
import { UserService } from '../auth/user.service'
import { Interceptor } from '../auth/inteceptor';
import 'rxjs/add/operator/catch';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog,
     private authService: AuthService, private token: TokenStorage, private userservice:UserService) {
  }

  username: string;
  password: string;
  userRole: string[];
  isInvalidUser: boolean;
  isInvalidRole: boolean;

  ngOnInit() {
  }

  login(): void {
    this.authService.attemptAuth(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        console.log('token ::',data.token);
        let tokenInfo = this.getDecodedAccessToken(data.token); 
        if(tokenInfo.scopes != null){
          console.log('tokenInfo ::',tokenInfo.scopes.toString());
          this.userRole = tokenInfo.scopes;
          this.userservice.userRole = this.userRole;
          this.isInvalidRole = false;
          this.isInvalidUser = false;
        }
        else{
          this.isInvalidRole = true;
          this.isInvalidUser = true;
        } 
        this.router.navigate(['sidebar']);
      },
      err => console.log(err),
     // () => console.log('yay')   On Complete
    );
    
    if(this.userservice.errStatusCode == 401){
      this.isInvalidUser = true;
    }
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

}
