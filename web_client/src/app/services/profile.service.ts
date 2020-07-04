import { Injectable } from "@angular/core";
import {
  Http,
  RequestOptions,
} from "@angular/http";
import { environment } from "src/environments/environment";
import { Headers } from "@angular/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { BaseService } from "./base.service";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProfileService {

  // getProfile() {
  //   return this.get("/auth").then(
  //     (res: {data: any}) => {
  //       // var object = JSON.parse((<any>res)._body);
  //       // resolve(object.data);
  //       console.log(res.data);
  //       return res.data
        
  //     }
  //   ).catch(err => err);
  // }
  
  constructor(private http: Http, private jwtHelper: JwtHelperService) {}

  private API_URL = environment.apiUrl;
  getProfile() {
    var headers = new Headers({
      'Content-Type': 'application/json',
      cookies: document.cookie
    })

    let options = new RequestOptions({
      headers: headers,
      withCredentials: true,
    });
    return new Promise((resolve, reject) => {
      console.log(456);
      
      this.http.get(this.API_URL + "/auth", options).subscribe(
        (res) => {
          console.log(res);
          
          var object = JSON.parse((<any>res)._body);
          console.log(object);
          
          resolve(object.data);
        },
        (err) => reject(err)
      );
    });
  }
}
