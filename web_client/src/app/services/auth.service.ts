import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Headers } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(
      private http: Http,
      private router:Router,
      public jwtHelper: JwtHelperService
    ) {}

    private API_URL = environment.apiUrl;

    getUsers() {
      return this.http.get(this.API_URL).map((r: Response) => r.json());
    }

    signIn(user: {username, password}): Promise<boolean>{
      return new Promise((resolve, reject) => {
        this.http.post(this.API_URL + '/auth', user)
        .subscribe(res => {
          var object = JSON.parse((<any>res)._body);
          localStorage.setItem('auth-token', object.responseMessage.data.cookies.token);
          this.router.navigate(['user'])
          resolve(true);
        }, err => reject(err))
      })
    }
  
    public isAuthenticated(): boolean {
      const token = localStorage.getItem('auth-token');
      if (token == null){
        return false;
      } else {
        return !this.jwtHelper.isTokenExpired(token);
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
          var object = JSON.parse((<any>res)._body);
          resolve(object.data.exprired);
        }, err => {
          reject(err);
        })

      })
    }
}
