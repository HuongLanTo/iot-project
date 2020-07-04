import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(
      private http: Http,
      private router:Router,
      public jwtHelper: JwtHelperService,
      private cookieService: CookieService
    ) {}

    private API_URL = environment.apiUrl;

    signIn(user: {username, password}): Promise<boolean>{
      return new Promise((resolve, reject) => {
        this.http.post(this.API_URL + '/auth', user)
        .subscribe(res => {
          var object = JSON.parse((<any>res)._body);
          localStorage.setItem('auth-token', object.responseMessage.data.cookies.token);
          this.cookieService.put('user_token',object.responseMessage.data.cookies.token);
          this.cookieService.put('durations',object.responseMessage.data.cookies.durations);
          this.router.navigate(['user'])
          resolve(true);
        }, err => reject(err))
      })
    }
  
    public isAuthenticated() {
      const token = localStorage.getItem('auth-token');
      if (token == null){
        return false;
      } else {
        return !this.jwtHelper.isTokenExpired(token);
        return true;
      }
    }

    logout() {
      localStorage.removeItem('auth-token');
      this.router.navigate(['login']);
    }

    public checkSession() {
      return new Promise((resolve, reject) => {
        this.http.get(this.API_URL + '/auth/session')
        .subscribe(res => {
          console.log(res);
          
          var object = JSON.parse((<any>res)._body);
          console.log(object.data.exprired);
          
          resolve(object.data.exprired);
        }, err => {
          reject(err);
        })

      })
    }
}
