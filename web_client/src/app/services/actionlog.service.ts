import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: 'root'
})
export class ActionlogService extends BaseService {
    constructor(
        protected httpClient: HttpClient
    ) {
        super(httpClient)
    }

    getActionLogList(filter:any, page: number, size: number) {
        filter = JSON.stringify(filter);
        filter = btoa(unescape(encodeURIComponent(filter)));
        return new Promise((resolve, reject) => {
            this.httpClient.get(this.API_URL + `/api/actionLog?filter=${filter}&page=${page}&size=${size}`, this.getOptions()).
                subscribe((res: {responseData: any}) => {
                    resolve(res.responseData)
                }, err => {
                    reject(err)
                }
            )
        })
    }
}