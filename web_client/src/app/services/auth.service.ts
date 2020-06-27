import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(
      private http: Http
    ) {}

    private API_URL = 'https://5ee4a4deddcea00016a36e04.mockapi.io/api/account';

    getUsers() {
      return this.http.get(this.API_URL).map((r: Response) => r.json());
    }

    createUser
}
