import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable({
    providedIn: 'root'
})
export class NodeService {
    constructor(
        private http: Http
    ) {}
  
    private API_URL = 'https://5ee4a4deddcea00016a36e04.mockapi.io/api/user/';

    getNodeList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL)
                .subscribe(res => {
                    var object = JSON.parse((<any>res)._body);
                    resolve(object);
                }, err => {
                    reject(err);
                })
        })
    }

    createNode(node: any): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.http.post(this.API_URL, node)
                .subscribe(res => {
                    resolve(true);
                }, err => reject(err))
        })
    }

    updateNodeInfo(id: string, nodeInfo) {
        return new Promise((resolve, reject) => {
            this.http.put(this.API_URL + id, nodeInfo)
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

    approve(id: string, userInfo) {
        console.log('Phe duyet tai khoan: ', userInfo);
    }

    disapprove(id: string, userInfo) {
        console.log('Tu choi phe duyet tai khoan: ', userInfo);
    }
}