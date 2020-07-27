import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";


@Injectable({ providedIn: "root" })
export class BaseService {
  constructor(
    protected httpClient: HttpClient,
    // protected cookieService: CookieService
  ) {}

  protected API_URL = environment.apiUrl;

  protected getOptions() {
    return { headers: new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
      Cookies: document.cookie,
    }) };
  }
}
