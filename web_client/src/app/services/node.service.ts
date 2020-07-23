import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { BaseService } from "./base.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class NodeService {
    constructor(
        protected http: HttpClient
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

    getNodeList(filter:any, page: number, size: number) {
        filter = JSON.stringify(filter);
        filter = btoa(filter);
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL + `/api/node?filter=${filter}&page=${page}&size=${size}`, this.getOptions())
                .subscribe((res: {responseData: any}) => {
                    resolve(res.responseData);
                }, err => {
                    reject(err);
                })
        })
    }

    getNodeListNoFilter() {
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL + "/api/node", this.getOptions())
                .subscribe((res: {responseData: any}) => {
                    resolve(res.responseData);
                }, err => {
                    reject(err);
                })
        })
    }

    createNode(node: any): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.http.post(this.API_URL + "/api/node", node, this.getOptions())
                .subscribe(res => {
                    resolve(true);
                }, err => reject(err))
        })
    }

    updateNodeInfo(id: string, nodeInfo) {
        return new Promise((resolve, reject) => {
            this.http.put(this.API_URL + `/api/node/parameter/${id}`, nodeInfo, this.getOptions())
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }

    // createNode(user: any) {
    //     console.log('Tai khoan dang cho phe duyet:', user);
        
    // }

    approve(id: string, nodeInfo) {
        return new Promise((resolve, reject) => {
            this.http.put(this.API_URL + `/api/node/approve/${id}`, nodeInfo, this.getOptions()).subscribe(res => {
                resolve(true);
            }, err => {
                reject(err);
            })
        })
    }

}