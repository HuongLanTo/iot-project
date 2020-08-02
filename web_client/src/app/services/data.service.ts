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

    getDataOfNode(filter: any, page: number) {
      filter = JSON.stringify(filter);
      filter = btoa(filter);
      console.log(filter);
      
      return new Promise((resolve, reject) => {
        this.http.get(this.API_URL + `/api/v1/nodes/hours?filter=${filter}&page=${page}`).subscribe((res: {data: any}) => {
          resolve(res.data)
        }, err => {
          reject(err);
        })
      })
    }

    getDataBy24Hour(filter: any) {
      filter = JSON.stringify(filter);
      filter = btoa(filter);
      return new Promise((resolve, reject) => {
        this.http.get(this.API_URL + `/api/v1/nodes/hours?filter=${filter}`).subscribe((res: {data: any}) => {
          console.log(res.data);
          
          resolve(res.data)
        }, err => {
          reject(err);
        })
      })
    }

    getDataBy3Day(filter: any) {
      filter = JSON.stringify(filter);
      filter = btoa(filter);
      console.log(filter);
      return new Promise((resolve, reject) => {
        this.http.get(this.API_URL + `/api/v1/nodes/days/last/three?filter=${filter}`).subscribe((res: {data: any}) => {
          resolve(res.data)
        }, err => {
          reject(err);
        })
      })
    }

    getDataOfAllNodeByDay(filter: any) {
      filter = JSON.stringify(filter);
      filter = btoa(filter);
      console.log(filter);
      return new Promise((resolve, reject) => {
        this.http.get(this.API_URL + `/api/v1/nodes/days/last/all/?filter=${filter}`).subscribe((res: {data: any}) => {
          resolve(res.data)
        }, err => {
          reject(err);
        })
      })
    }
    
    
}
