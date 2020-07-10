import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable({
    providedIn: 'root'
})
export class LocationService {
    constructor(
        private http: Http
    ) {}

    private API_URL = "https://5ee4a4deddcea00016a36e04.mockapi.io/api";

    getLocationList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL + '/location').subscribe(
                res => {
                    var object = JSON.parse((<any>res)._body);
                    resolve(object)
                }, err => {
                    reject(err)
                }
            )
        })
    }

    createLocation(location: any): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.http.post(this.API_URL + '/location', location)
                .subscribe(res => {
                    resolve(true);
                }, err => {
                    reject(err);
                })
        })
    }
}