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
  
    private API_URL = 'https://5ee4a4deddcea00016a36e04.mockapi.io/api/user';

    getNodes() {
        return this.http.get(this.API_URL).map((r: Response) => r.json());
    }

    createNode(node: any): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.http.post(this.API_URL, node)
                .subscribe(res => {
                    resolve(true);
                }, err => reject(err))
        })
    }
}