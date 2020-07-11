import { Injectable } from "@angular/core";
import {
  Http,
  RequestOptions,
} from "@angular/http";
import { environment } from "src/environments/environment";
import { Headers } from "@angular/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { BaseService } from "./base.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProfileService extends BaseService {

  getProfile() {
    return this.get("/auth/get-me").then(
      (res: {data: any}) => {
        return res.data;
      }
    ).catch(err => err);
  }
  // getProfile() {
    // var headers = new Headers({
    //   'Content-Type': 'application/json',
    //   'cookies': JSON.stringify(document.cookie)
    // })

    // let options = new RequestOptions({
    //   headers: headers,
    //   withCredentials: true,
    // });

    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
     
    // withCredentials: true, 
    // cookies: 'response' as 'response'
    // };

    
  //   return new Promise((resolve, reject) => {
  //     console.log(456);
      
  //     this.http.get(this.API_URL + "/auth", this.getOptions()).subscribe(
  //       (res: {data: any}) => {
  //         console.log(res);
          
  //         var object = res;
  //         console.log(object);
          
  //         resolve(object.data);
  //       },
  //       (err) => reject(err)
  //     );
  //   });
  // }
}
