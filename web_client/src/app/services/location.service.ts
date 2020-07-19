import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class LocationService {
    constructor(
        private http: HttpClient
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

    getLocationList(filter:any, page: number, size: number) {
        filter = JSON.stringify(filter);
        filter = btoa(filter);
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL + `/api/location?filter=${filter}&page=${page}&size=${size}`, this.getOptions()).
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
            this.http.get(this.API_URL + "/api/location", this.getOptions()).
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
            this.http.post(this.API_URL + '/api/location', location, this.getOptions())
                .subscribe(res => {
                    resolve(true);
                }, err => {
                    reject(err);
                })
        })
    }

    getProvinceList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL + '/api/province', this.getOptions())
                .subscribe((res: {responseData: any}) => {
                    resolve(res.responseData);
                }, err => {
                    reject(err);
                })
        })
    }

    getDistrictList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL + '/api/district', this.getOptions())
                .subscribe((res: {responseData: any}) => {
                    resolve(res.responseData);
                }, err => {
                    reject(err);
                })
        })
    }

    getSubDistrictList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL + '/api/subdistrict', this.getOptions())
                .subscribe((res: {responseData: any}) => {
                    resolve(res.responseData);
                }, err => {
                    reject(err);
                })
        })
    }
}