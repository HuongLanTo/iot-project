import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: 'root'
})
export class LocationService extends BaseService {
    constructor(
        protected httpClient: HttpClient
    ) {
        super(httpClient)
    }

    getLocationList(filter:any, page: number, size: number) {
        filter = JSON.stringify(filter);
        filter = btoa(unescape(encodeURIComponent(filter)));
        return new Promise((resolve, reject) => {
            this.httpClient.get(this.API_URL + `/api/location?filter=${filter}&page=${page}&size=${size}`, this.getOptions()).
                subscribe((res: {responseData: any}) => {
                    resolve(res.responseData)
                }, err => {
                    reject(err)
                }
            )
        })
    }

    getLocationListNoFilter() {
        return new Promise((resolve, reject) => {
            this.httpClient.get(this.API_URL + "/api/location", this.getOptions()).
                subscribe((res: {responseData: any}) => {
                    resolve(res.responseData)
                }, err => {
                    reject(err)
                }
            )
        })
    }

    createLocation(location: any): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.httpClient.post(this.API_URL + '/api/location', location, this.getOptions())
                .subscribe(res => {
                    resolve(true);
                }, err => {
                    reject(err);
                })
        })
    }

    getProvinceList() {
        return new Promise((resolve, reject) => {
            this.httpClient.get(this.API_URL + '/api/province', this.getOptions())
                .subscribe((res: {responseData: any}) => {
                    resolve(res.responseData);
                }, err => {
                    reject(err);
                })
        })
    }

    getDistrictList(filter: any) {
        filter = JSON.stringify(filter);
        filter = btoa(unescape(encodeURIComponent(filter)));
        return new Promise((resolve, reject) => {
            this.httpClient.get(this.API_URL + `/api/district?filter=${filter}`, this.getOptions())
                .subscribe((res: {responseData: any}) => {
                    resolve(res.responseData);
                }, err => {
                    reject(err);
                })
        })
    }

    getSubDistrictList(filter: any) {
        filter = JSON.stringify(filter);
        filter = btoa(unescape(encodeURIComponent(filter)));
        return new Promise((resolve, reject) => {
            this.httpClient.get(this.API_URL + `/api/subdistrict?filter=${filter}`, this.getOptions())
                .subscribe((res: {responseData: any}) => {
                    resolve(res.responseData);
                }, err => {
                    reject(err);
                })
        })
    }
}