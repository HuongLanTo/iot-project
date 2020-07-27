import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {}


  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/user']);
    }
  }
 

  async login() {
    var userLogin = {
      username: this.username,
      password: this.password
    }
    await this.authService.signIn(userLogin);
    if (!await this.authService.isApprovedAndActive()) {
      this.authService.logout();
    }
    
  }

}
