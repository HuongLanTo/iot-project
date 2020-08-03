import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute,
  Router,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
      console.log(123);
      
    const allowedRoles = next.data.allowedRoles;
    const res = await this.authService.isAuthorized(allowedRoles);
    
    
    if (!res) {
      console.log("res", res);
      this.router.navigate(['user-profile']);
    }

    return res;
  }

//   canActivateChild(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     const allowedRoles = next.data.allowedRoles;
//     const isAuthorized = this.authorizationService.isAuthorized(allowedRoles);

//     if (!isAuthorized) {
//       // if not authorized, show access denied message
//       this.router.navigate(['/accessdenied']);
//     }

//     return isAuthorized;
//   }
}
