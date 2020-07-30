import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(
      protected http: HttpClient,
      private router:Router,
      public jwtHelper: JwtHelperService
    ) {
    }

    protected headers = new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        Cookies: document.cookie,
      });
    
      private getOptions() {
        return { headers: this.headers };
      }
    

    private API_URL = environment.apiUrl;

    // filter(filter: any) {
    //     filter = JSON.stringify(filter);
    //     filter = btoa(filter);
    // }

    getUserList(filter: any, page: number, size: number) {
        filter = JSON.stringify(filter);
        filter = btoa(unescape(encodeURIComponent(filter)));
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL + `/api/user?filter=${filter}&page=${page}&size=${size}`, this.getOptions()).subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
        })
    }

    getUser(filter: string) {
        filter = JSON.stringify(filter);
        filter = btoa(filter);
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL + `/api/user?filter=${filter}`, this.getOptions()).subscribe((res: {data: any}) => {
                console.log(res.data);
                resolve(res.data);
            }, err => {
                reject(err);
            })
        })
    }

    getUserById(id: string) {
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL + `/api/user/${id}`).subscribe((res: {data: any}) => {
                resolve(res.data);
            }, err => {
                reject(err);
            })
        })
    }

    createUser(user: any) {
        return new Promise((resolve, reject) => {
            this.http.post(this.API_URL + "/api/user", user, this.getOptions()).subscribe(res => {
                resolve(true);
            }, err => {
                reject(err);
            })
        })

    }

    updateUserInfo(id: string, userInfo) {
        return new Promise((resolve, reject) => {
            this.http.put(this.API_URL + `/api/user/basic/${id}`, userInfo, this.getOptions()).subscribe(res => {
                resolve(true);
            }, err => {
                reject(err);
            })
        })
    }

    approve(id: string, userInfo) {
        return new Promise((resolve, reject) => {
            this.http.put(this.API_URL + `/api/user/approve/${id}`, userInfo, this.getOptions()).subscribe(res => {
                resolve(true);
            }, err => {
                reject(err);
            })
        })
    }

    updateStatus(id: string, userInfo) {
        return new Promise((resolve, reject) => {
            this.http.put(this.API_URL + `/api/user/status/${id}`, userInfo, this.getOptions()).subscribe(res => {
                resolve(true);
            }, err => {
                reject(err);
            })
        })
    }

    
}
