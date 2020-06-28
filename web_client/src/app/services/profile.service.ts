import { Injectable } from "@angular/core";
import {
  Http,
  Response,
  RequestOptions,
  RequestOptionsArgs,
} from "@angular/http";
import { AuthService } from "./auth.service";
import { environment } from "src/environments/environment";
import { Headers } from "@angular/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  constructor(private http: Http, private jwtHelper: JwtHelperService) {}

  private API_URL = environment.apiUrl;

  getProfile() {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({
      headers: headers,
      withCredentials: true,
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + "/auth", options).subscribe(
        (res) => {
          var object = JSON.parse((<any>res)._body);
          resolve(object.data);
        },
        (err) => reject(err)
      );
    });
  }
}
