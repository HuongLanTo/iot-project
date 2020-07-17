import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class LocationService {
    constructor(
        private http: HttpClient
    ) {}

    private API_URL_TEMP = "https://5ee4a4deddcea00016a36e04.mockapi.io/api";
    private API_URL = environment.apiUrl;

    getLocationList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL + '/api/location').
                subscribe((res: {responseData: any}) => {
                    console.log(res.responseData);
                    resolve(res.responseData)
                }, err => {
                    reject(err)
                }
            )
        })
    }

    createLocation(location: any): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.http.post(this.API_URL + '/api/location', location)
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
                .subscribe((res: {responseData: any}) => {
                    resolve(res.responseData);
                }, err => {
                    reject(err);
                })
        })
    }

    getDistrictList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL + '/api/district')
                .subscribe((res: {responseData: any}) => {
                    resolve(res.responseData);
                }, err => {
                    reject(err);
                })
        })
    }

    getSubDistrictList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL + '/api/subdistrict')
                .subscribe((res: {responseData: any}) => {
                    resolve(res.responseData);
                }, err => {
                    reject(err);
                })
        })
    }
}