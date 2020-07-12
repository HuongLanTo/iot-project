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
export class UserService extends BaseService {
    constructor(
      protected http: HttpClient,
      private router:Router,
      public jwtHelper: JwtHelperService
    ) {
        super(http)
    }

    private API_URL = "https://5ee4a4deddcea00016a36e04.mockapi.io/api/account";

    // getUserList() {
    //     return new Promise((resolve, reject) => {
    //         this.http.get("/api/user").subscribe(res => {
    //             console.log(res);
                
    //             var object = JSON.parse((<any>res)._body);
    //             resolve(object);
    //         }, err => {
    //             reject(err);
    //         })
    //     })
    // }

    getUserList(filter: any, page: number, size: number) {
        return this.get(`/api/user/?filter=${filter}&page=${page}&size=${size}`)
            .then(res => {
                return res;
            })
            .catch(err => err)
    }

    // getRoleList() {
    //     return this.get("/api/role")
    //         .then(res => {
    //             console.log(res);
    //             return res;
    //         })
    //         .catch(err => err);
    // }

    // createUser(user: any) {
    //     return new Promise((resolve, reject) => {
    //         this.http.post(environment.apiUrl + '/api/user', {header: 'Content-Type: application/json'}, user).subscribe(res => {
    //             console.log(res);
                
    //             resolve(true);
    //         }, err => {
    //             reject(err);
    //         })
    //     })

    // }

    createUser(user) {
        return this.post("/api/user", user).then(res => {
            console.log(res);
            
            return true;
        })
        .catch(err => err);
    }

    updateUserInfo(id: string, userInfo) {
        return this.put(`/api/user/${id}/basic`, userInfo)
            .then(res => {
                return true;
            })
            .catch(err => err);
    }

    approve(id: string, userInfo) {
        console.log('Phe duyet tai khoan: ', userInfo);
    }

    disapprove(id: string, userInfo) {
        console.log('Tu choi phe duyet tai khoan: ', userInfo);
    }

    
}
