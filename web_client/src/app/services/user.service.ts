import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

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

    private API_URL = environment.apiUrl;

    getUserList(filter: any, page: number, size: number) {
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL + `/api/user?filter=${filter}&page=${page}&size=${size}`).subscribe(res => {
                console.log(res);
                resolve(res);
            }, err => {
                reject(err);
            })
        })
    }

    // getRoleList() {
    //     return this.get("/api/role")
    //         .then(res => {
    //             console.log(res);
    //             return res;
    //         })
    //         .catch(err => err);
    // }

    getUser(filter: string) {
        filter = JSON.stringify(filter);
        filter = btoa(filter);
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL + `/api/user?filter=${filter}`).subscribe((res: {data: any}) => {
                console.log(res.data);
                resolve(res.data);
            }, err => {
                reject(err);
            })
        })
    }

    createUser(user: any) {
        return new Promise((resolve, reject) => {
            this.http.post(this.API_URL + "/api/user?filter=", user).subscribe(res => {
                resolve(true);
            }, err => {
                reject(err);
            })
        })

    }

    updateUserInfo(id: string, userInfo) {
        return new Promise((resolve, reject) => {
            this.http.put(this.API_URL + `/api/user/basic/${id}`, userInfo).subscribe(res => {
                resolve(true);
            }, err => {
                reject(err);
            })
        })
    }

    approve(id: string, userInfo) {
        console.log('Phe duyet tai khoan: ', userInfo);
    }

    disapprove(id: string, userInfo) {
        console.log('Tu choi phe duyet tai khoan: ', userInfo);
    }

    
}
