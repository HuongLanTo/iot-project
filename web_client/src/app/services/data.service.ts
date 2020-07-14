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
      
    }
    
    
}
