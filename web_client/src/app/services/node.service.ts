import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { BaseService } from "./base.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class NodeService extends BaseService {
    constructor(
        protected httpClient: HttpClient
    ) {
        super(httpClient)
    }

    getNodeList(filter:any, page: number, size: number) {
        filter = JSON.stringify(filter);
        filter = btoa(unescape(encodeURIComponent(filter)));
        return new Promise((resolve, reject) => {
            this.httpClient.get(this.API_URL + `/api/node?filter=${filter}&page=${page}&size=${size}`, this.getOptions())
                .subscribe((res: {responseData: any}) => {
                    resolve(res.responseData);
                }, err => {
                    reject(err);
                })
        })
    }

    getNodeListNoFilter() {
        return new Promise((resolve, reject) => {
            this.httpClient.get(this.API_URL + "/api/node", this.getOptions())
                .subscribe((res: {responseData: any}) => {
                    resolve(res.responseData);
                }, err => {
                    reject(err);
                })
        })
    }

    getNodeListApprovedFilter(filter:any) {
        filter = JSON.stringify(filter);
        filter = btoa(unescape(encodeURIComponent(filter)));
        return new Promise((resolve, reject) => {
            this.httpClient.get(this.API_URL + `/api/node?filter=${filter}`)
                .subscribe((res: {responseData: any}) => {
                    resolve(res.responseData);
                }, err => {
                    reject(err);
                })
        })
    }

    createNode(node: any): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.httpClient.post(this.API_URL + "/api/node", node, this.getOptions())
                .subscribe(res => {
                    resolve(true);
                }, err => reject(err))
        })
    }

    updateNodeInfo(id: string, nodeInfo) {
        return new Promise((resolve, reject) => {
            this.httpClient.put(this.API_URL + `/api/node/parameter/${id}`, nodeInfo, this.getOptions())
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }

    approve(id: string, nodeInfo) {
        return new Promise((resolve, reject) => {
            this.httpClient.put(this.API_URL + `/api/node/approve/${id}`, nodeInfo, this.getOptions()).subscribe(res => {
                resolve(true);
            }, err => {
                reject(err);
            })
        })
    }

    updateStatus(id: string, status) {
        return new Promise((resolve, reject) => {
            this.httpClient.put(this.API_URL + `/api/node/status/${id}`, status, this.getOptions())
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }

}