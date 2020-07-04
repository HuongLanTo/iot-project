import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
      public authService: AuthService,
      public router: Router) {}
  async canActivate() {
    if (!this.authService.isAuthenticated() ) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}