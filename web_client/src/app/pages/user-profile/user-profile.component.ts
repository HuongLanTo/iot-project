import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  profile_user: any = {};
  user: any = {};
  checkEdit = false;
  filter = {
    _id: ""
  }
  role: any = {}

  constructor(
    private profileService: ProfileService,
    private userService: UserService
  ) { }

  async ngOnInit() {
    await this.getProfile();
  }

  async getProfile() {
    this.profileService.getProfile().then((data: any) => {
      this.profile_user = data;
      this.filter._id = data._id;
      this.getUser(this.filter);
    })
  }

  async getUser(filter) {
    this.userService.getUser(filter).then((data: any) => {
      this.user = data[0];
      this.role = data[0].role.action_permission[0].name;
      console.log(456, data[0].role.action_permission[0].name);
      
      console.log(123,this.user.username);
      
    })
  }

  edit() {
    this.checkEdit = !true;
  }

  out() {
    this.checkEdit = false;
  }

  save() {
    
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
