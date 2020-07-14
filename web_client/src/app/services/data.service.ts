import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    constructor(
      private http: HttpClient
    ) {}

    private API_URL = environment.apiUrl;
    
    getDataByLastHour() {
      return new Promise((resolve, reject) => {
        this.http.get(this.API_URL + "/api/v1/nodes/hours/last").subscribe((res: {data: any}) => {
          resolve(res.data)
        }, err => {
          reject(err);
        })
      })
    }

    getDataBy24Hour() {
      return new Promise((resolve, reject) => {
        this.http.get(this.API_URL + "/api/v1/nodes/hours").subscribe((res: {data: any}) => {
          resolve(res.data)
        }, err => {
          reject(err);
        })
      })
    }

    getDataBy3Day(filter: any) {
      console.log(filter);
      
      filter = JSON.stringify(filter);
      filter = btoa(filter);
      console.log(filter);
      return new Promise((resolve, reject) => {
        this.http.get(this.API_URL + `/api/v1/nodes/days/last/three/?filter=${filter}`).subscribe((res: {data: any}) => {
          resolve(res.data)
        }, err => {
          reject(err);
        })
      })
    }
    
    
}
