// import { Injectable } from '@angular/core';
// import {
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   ActivatedRoute,
//   Router,
//   CanActivateChild
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthorizationGuard implements CanActivate, CanActivateChild {
//   constructor(
//     private authorizationService: AuthService,
//     private router: Router
//   ) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     const allowedRoles = next.data.allowedRoles;
//     const isAuthorized = this.authorizationService.isAuthorized(allowedRoles);

//     if (!isAuthorized) {
//       this.router.navigate(['dashboard']);
//     }

//     return isAuthorized;
//   }

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
// }
