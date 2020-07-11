import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UserService } from 'src/app/services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userList: any;
  public filter = {}
  public currentUser: any = {};
  private currentPage: number = 1;
  private showPages: number = 5;
  private totalPage: number;
  private sizePage = 10;
  
  constructor(
    private http: Http,
    private userService: UserService,
    private spinnerService: NgxSpinnerService
  ) { }

  async ngOnInit() {
    await this.getUserList();
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

  // async getUserList(filter, currentPage, sizePage) {
  //   this.spinnerService.show();
  //   await this.userService.getUserList(filter, currentPage, sizePage).then(data => {
  //     console.log(243658, data);
      
  //     this.totalPage = Math.ceil(10 / sizePage);
  //     if(this.totalPage <= this.showPages)
  //       this.showPages = this.totalPage;
  //     this.showPages = 5;    
  //     this.userList = data;
  //     this.spinnerService.hide();
  //   })
  // }

  async getUserList() {
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


