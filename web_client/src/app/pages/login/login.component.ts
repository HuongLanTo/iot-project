import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string = "";
  public password: string = "";

  constructor(
    public authService: AuthService,
    private toastrService: ToastrService,
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
    if (this.username.length == 0) {
      this.toastrService.warning("Tên đăng nhập không được để trống.");
    }
    if (this.password.length == 0) {
      this.toastrService.warning("Mật khẩu không được để trống.");
    }
    if (this.username.length != 0 && this.username.length != 0) {
      await this.authService.signIn(userLogin)
      .then(data => {})
      .catch(err => {
        this.toastrService.warning("Tên đăng nhập hoặc mật khẩu không chính xác.")
      });
      if (!await this.authService.isApprovedAndActive()) {
        this.authService.logout();
      }
    }
  }

}
