import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pending-user',
  templateUrl: './pending-user.component.html',
  styleUrls: ['./pending-user.component.css']
})
export class PendingUserComponent implements OnInit {
  public userList: any;
  currentUser: any = {};

  constructor(
    private userService: UserService
  ) { }

  get key_data() {
    return KEY_DATA;
  }

  get fields() {
    return FIELDS;
  }

  async ngOnInit() {
    await this.getUserList();
  }

  getUserList() {
    this.userService.getUserList().then((data) => {
      this.userList = data;
    })
  }

  approve() {
    this.userService.approve(this.currentUser.id, {
      approve: 1,
      status: 1
    })
    this.getUserList();
  }

  disapprove() {
    this.userService.disapprove(this.currentUser.id, {
      approve: -1
    })
    this.getUserList();
  }

}

const KEY_DATA = [
  {
    key: "username",
    type: "string",
  },
  {
    key: "name",
    type: "string",
  },
  {
    key: "role",
    type: "string",
  },
  {
    key: "email",
    type: "string",
  },
];

const FIELDS = [
  {
    label: "Username",
    name: "username",
  },
  {
    label: "Họ và tên",
    name: "name",
  },
  {
    label: "Vai trò",
    name: "role",
  }, 
  {
    label: "Email",
    name: "email"
  }
];
