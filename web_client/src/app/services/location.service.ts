import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class LocationService {
    constructor(
        private http: Http
    ) {}

    private API_URL_TEMP = "https://5ee4a4deddcea00016a36e04.mockapi.io/api";
    private API_URL = environment.apiUrl;

    getLocationList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL_TEMP + '/location').subscribe(
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
            this.http.post(this.API_URL_TEMP + '/location', location)
                .subscribe(res => {
                    resolve(true);
                }, err => {
                    reject(err);
                })
        })
    }

    getProvinceList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL + '/api/province')
                .subscribe(res => {
                    var object = JSON.parse((<any>res)._body);
                    resolve(object.responseData);
                }, err => {
                    reject(err);
                })
        })
    }

    getDistrictList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL + '/api/district')
                .subscribe(res => {
                    var object = JSON.parse((<any>res)._body);
                    resolve(object.responseData);
                }, err => {
                    reject(err);
                })
        })
    }
}