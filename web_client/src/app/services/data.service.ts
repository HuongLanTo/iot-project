import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    constructor(
      private http: Http
    ) {}

    private API_URL = environment.apiUrl;
    
    
    
}
