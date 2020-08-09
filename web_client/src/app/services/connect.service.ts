import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: 'root'
})
export class ConnectService extends BaseService {
    constructor(
        protected httpClient: HttpClient
    ) {
        super(httpClient)
    }

    getConnectingManagementList() {
        // filter = JSON.stringify(filter);
        // filter = btoa(unescape(encodeURIComponent(filter)));
        return new Promise((resolve, reject) => {
            this.httpClient.get(this.API_URL + "/api/currentConnection", this.getOptions()).
                subscribe((res: {responseData: any}) => {
                    console.log(res);
                    
                    resolve(res.responseData)
                }, err => {
                    reject(err)
                }
            )
        })
    }
}