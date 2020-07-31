import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ActionlogService {
    constructor(
        private http: HttpClient
    ) {}

    protected headers = new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        Cookies: document.cookie,
      });
    
    private getOptions() {
    return { headers: this.headers };
    }
    
    private API_URL = environment.apiUrl;

    getActionLogList(filter:any, page: number, size: number) {
        filter = JSON.stringify(filter);
        filter = btoa(filter);
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL + `/api/actionLog?filter=${filter}&page=${page}&size=${size}`, this.getOptions()).
                subscribe((res: {responseData: any}) => {
                    resolve(res.responseData)
                }, err => {
                    reject(err)
                }
            )
        })
    }
}