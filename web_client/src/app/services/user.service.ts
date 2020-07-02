import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(
      private http: Http,
      private router:Router,
      public jwtHelper: JwtHelperService
    ) {}

    private API_URL = "https://5ee4a4deddcea00016a36e04.mockapi.io/api/account";

    getUserList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL).subscribe(res => {
                var object = JSON.parse((<any>res)._body);
                resolve(object);
            }, err => {
                reject(err);
            })
        })
    }

    
}
