import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { UserService } from 'src/app/services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  profile_user: any = {
    name: "",
    email: "", 
    phone: "",
    password: "",
  };
  checkEdit = false;
  roleName: any = "";


  constructor(
    private profileService: ProfileService,
    private userService: UserService,
    private spinnerService: NgxSpinnerService,
    private toastrService: ToastrService
  ) { }

  async ngOnInit() {
    this.spinnerService.show();
    await this.getProfile();
    this.spinnerService.hide();
  }

  async getProfile() {
    await this.profileService.getProfile().then((data: any) => {
      this.profile_user = data;
      this.roleName = data.role.name;
    })
  }


  edit() {
    this.checkEdit = true;
  }

  out() {
    this.getProfile();
    this.checkEdit = false;
  }

  async save() {
    this.checkEdit = false;
    await this.userService.updateUserInfo(this.profile_user._id, {
      email: this.profile_user.email,
      phone: this.profile_user.phone,
      name: this.profile_user.name,
      password: this.profile_user.password
    }).then(data => {
      this.toastrService.success("Cập nhật thông tin cá nhân thành công.");
    }).catch(err => {
      this.toastrService.warning("Cập nhật thất bại.")
    })
  }

}

const FIELDS = [
  {
    label: "Tên đăng nhập",
    fin: "username", // fin = for, id, name
    key: "username",
    type: "input",
    readonly: true,
  },
  {
    label: "Mật khẩu",
    fin: "password", // fin = for, id, name
    key: "password",
    type: "input",
    readonly: true,
  },
  {
    label: "Họ và tên",
    fin: "name", // fin = for, id, name
    key: "name",
    type: "input",
    readonly: true,
  },
  {
    label: "Email",
    fin: "email", // fin = for, id, name
    key: "email",
    type: "input",
    readonly: true,
  },
  {
    label: "Điện thoại",
    fin: "phone", // fin = for, id, name
    key: "phone",
    type: "input",
    readonly: true,
  },
  
];
