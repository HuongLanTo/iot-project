import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfileService } from './profile.service';
import { UserService } from './user.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
    constructor(
      protected httpClient: HttpClient,
      private router:Router,
      public jwtHelper: JwtHelperService,
      private cookieService: CookieService,
      private profileService: ProfileService,
      private userService: UserService
    ) {
      super(httpClient);
    }

    signIn(user: {username, password}): Promise<boolean>{
      return new Promise((resolve, reject) => {
        this.httpClient.post(this.API_URL + '/auth/login', user)
        .subscribe((res: {responseMessage:any}) => {
          localStorage.setItem('auth-token', res.responseMessage.data.cookies.token);
          this.cookieService.put('user_token',res.responseMessage.data.cookies.token);
          this.cookieService.put('durations',res.responseMessage.data.cookies.durations);
          this.router.navigate(['user'])
          resolve(true);
        }, err => reject(err))
      })
    }
  
    public isAuthenticated() {
      // const token = localStorage.getItem('auth-token');
      const token = this.cookieService.get('user_token');
      console.log("c", token);
      
      if (token == null){
        return false;
      } else {
        
        return !this.jwtHelper.isTokenExpired(token);
        //return true;
      }
    }

    async isAuthorized(allowedRoles: string[]): Promise<boolean> {
      // check if the list of allowed roles is empty, if empty, authorize the user to access the page
      if (allowedRoles == null || allowedRoles.length === 0) {
        return true;
      } else {
        var _id = "";
        await this.profileService.getId().then((data: any) => {
          _id = data;
        })   
        var nameRole = "";
        var actionName = [];
        await this.userService.getUserById(_id).then((data: any) => {
          nameRole = data.role.name;
          actionName = data.role.action_permission;
        })
        if (nameRole == "Admin") {
          return true;
        } else {
          var check = [];
          await actionName.forEach(e => {
            check.push(e.name);
          });
          for (var i = 0; i < check.length; i++) {
            if (allowedRoles.includes(check[i])) {
              return true;
            }
          }
          return false;
        }
        
      }

    
    
    // check if the user roles is in the list of allowed roles, return true if allowed and false if not allowed
      // return allowedRoles.includes();
      
    }

    logout() {
      localStorage.removeItem('auth-token');
      this.cookieService.remove('user_token')
      this.cookieService.remove('durations')
      this.router.navigate(['login']);
    }

    checkSession():Promise<boolean> {
      return new Promise((resolve, reject) => {
        this.httpClient.get(this.API_URL + '/auth/session', this.getOptions())
        .subscribe((res: {data: any}) => {
          resolve(res.data.exprired)
        }, err => {
          reject(err);
        })

      })
    }
}
