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
  constructor(
    protected httpClient: HttpClient
  ) {
    super(httpClient)
  }


  getProfile() {
    // return this.get("/auth/get-me").then(
    //   (res: {data: any}) => {
    //     return res.data;
    //   }
    // ).catch(err => err);
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.API_URL + "/auth/get-me", this.getOptions())
        .subscribe((res: {data: any}) => {
          resolve(res.data)
        }, err => {
          reject(err);
        })
    })
  }
  
  getId() {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.API_URL + "/auth/get-me", this.getOptions())
        .subscribe((res: {data: any}) => {
          resolve(res.data._id);
        }, err => {
          reject(err);
        })
    })
  }
}
