import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
      public authService: AuthService,
      public router: Router,
      private profileService: ProfileService) {}
  async canActivate() {
    
    if (await this.authService.isAuthenticated()==false) {
      this.router.navigate(['login']);
      return false;
    } else {
      var check: boolean;
      await this.authService.checkSession().then(data => {
        check = data;
      })
      if (check == true) {
        this.router.navigate(['login']);
        return false;
      } 
    } 
    return true;
  }
}