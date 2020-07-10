import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userList: any;
  public filter = {}
  public currentUser={};
  private currentPage: number = 1;
  private show;
  
  constructor(
    private http: Http,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUserList();
  }

  get fields() {
    return FIELDS;
  }

  get key_data() {
    return KEY_DATA;
  }

  get status() {
    return STATUS;
  }

  is_string(type: string) {
    return type === "string";
  }

  is_boolean(type: string) {
    return type === "boolean";
  }

  is_input(type: string) {
    return type === "input";
  }

  is_select(type: string) {
    return type === "select";
  }

  status_vn(value: string | number) {
    return value ? "Đang hoạt động" : "Dừng hoạt động";
  }

  getUserList() {
    this.userService.getUserList().then(data => {
      this.userList = data;
    })
  }

}

const STATUS = [
  { value: true, name: "Active" },
  { value: false, name: "Deactive" },
];

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
    key: "status",
    type: "boolean",
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
    label: "Trạng thái",
    name: "status"
  }, 
  {
    label: "Email",
    name: "email"
  }
];


