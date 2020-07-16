import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(
      private http: Http,
      private httpClient: HttpClient,
      private router:Router,
      public jwtHelper: JwtHelperService,
      private cookieService: CookieService
    ) {}

    protected headers = new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
      Cookies: document.cookie,
    });
  
    private getOptions() {
      return { headers: this.headers };
    }

    private API_URL = environment.apiUrl;

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
      const token = localStorage.getItem('auth-token');
      if (token == null){
        return false;
      } else {
        return !this.jwtHelper.isTokenExpired(token);
        //return true;
      }
    }

    logout() {
      localStorage.removeItem('auth-token');
      this.router.navigate(['login']);
    }

    public checkSession():Promise<boolean> {
      return new Promise((resolve, reject) => {
        this.httpClient.get(this.API_URL + '/auth/session', this.getOptions())
        .subscribe((res: {data:any}) => {
          resolve(res.data.exprired)
        }, err => {
          reject(err);
        })

      })
    }
}
