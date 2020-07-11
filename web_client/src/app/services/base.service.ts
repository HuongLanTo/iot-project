import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment as Env } from "../../environments/environment";


@Injectable({ providedIn: "root" })
export class BaseService {
  constructor(
    protected http: HttpClient,
    // protected cookieService: CookieService
  ) {}

  protected headers = new HttpHeaders({
    "Content-Type": "application/json",
    Accept: "application/json",
    Cookies: document.cookie,
  });
  protected params = new HttpParams();

  private getOptions() {
    return { headers: this.headers, params: this.params };
  }

  // private prepareAuthorization = () => {
  //   const token = localStorage.getItem("auth-cookies");
  //   if (token) {
  //     this.headers = this.headers.set("Authorization", "Bearer " + token);
  //   }
  // };

  public get(
    url: string,
    params?: {
      [param: string]: string | string[];
    }
  ) {
    // this.prepareAuthorization();
    if (params) {
      this.params = new HttpParams({
        fromObject: params
      });
    } else {
      this.params = new HttpParams();
    }

    return this.http.get(Env.apiUrl
         + url, this.getOptions()).toPromise();
  }

  public post(
    url,
    params: {
      [param: string]: string | string[];
    }
  ) {
    // this.prepareAuthorization();
    let json_body =
      this.headers.get("Content-Type") == "application/json" ? true : false;
    return this.http
      .post(
        Env.apiUrl + url,
        json_body
          ? JSON.stringify(params)
          : new HttpParams({
              fromObject: params
            }),
        this.getOptions()
      )
      .toPromise();
  }

  public put(
    url,
    params: {
      [param: string]: string | string[];
    }
  ) {
    // this.prepareAuthorization();
    let json_body =
      this.headers.get("Content-Type") == "application/json" ? true : false;
    return this.http
      .put(
        Env.apiUrl + url,
        json_body
          ? JSON.stringify(params)
          : new HttpParams({
              fromObject: params
            }),
        this.getOptions()
      )
      .toPromise();
  }

  public delete(
    url,
    params?: {
      [param: string]: string | string[];
    }
  ) {
    // this.prepareAuthorization();
    if (params) {
      this.params = new HttpParams({
        fromObject: params
      });
    } else {
      this.params = new HttpParams();
    }
    return this.http.delete(Env.apiUrl + url, this.getOptions()).toPromise();
  }
}
