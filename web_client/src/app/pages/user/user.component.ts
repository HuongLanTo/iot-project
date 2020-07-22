import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UserService } from 'src/app/services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/services/role.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: any = [];
  roleList: any = [];
  private filter = {
    approve: "1"
  };
  private currentUser: any = {};

  private currentPage: number = 1;
  private showPages: number = 5;
  private totalPage: number;
  private sizePage = 5;

  private temp: number = 0;

  // search
  searchRole = {

  }
  searchUsername = {
    username: "",
    name: ""
  }

  // temp
  private nameRole = "";
  
  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private spinnerService: NgxSpinnerService,
    private toastrService: ToastrService
  ) { }

  async ngOnInit() {
    await this.getUserList(this.filter, this.currentPage, this.sizePage);
    await this.getRoleList();
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

  get modals() {
    return MODALS;
  }

  get data() {
    return {
      status: STATUS,
    }
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

  async getUserList(filter, currentPage, sizePage) {
    this.spinnerService.show();
    await this.userService. getUserList(filter, currentPage, sizePage).then((data: any) => {
      this.totalPage = Math.ceil(data.totalDocuments / sizePage);
      if(this.totalPage <= this.showPages)
        this.showPages = this.totalPage;
      this.showPages = 3;    
      this.userList = data.data;
    });
    this.spinnerService.hide();
  }

  updateUserInfo() {
    this.userService.updateUserInfo(this.currentUser._id, {
      name: this.currentUser.name,
      // role: this.currentUser.role,
      email: this.currentUser.email
    })
    .then(data => {
      this.toastrService.success("Cập nhật thông tin người dùng thành công");
    })
    .catch((err) => {
      this.toastrService.warning("Cập nhật thông tin người dùng thất bại");
    });
  }

  async getRoleList() {
    await this.roleService.getRoles().then((data: any) => {
      this.roleList = data.data;
      console.log(this.roleList);
      
    })
  }

  redirect() {
    this.getUserList(this.filter, this.currentPage, this.sizePage);
  }

  // search
  getUserListByUsername() {
    this.currentPage = 1;
    this.getUserList(this.searchUsername, this.currentPage, this.sizePage);
  }

  support() {
    this.nameRole = this.currentUser.role.name;
    console.log(this.nameRole);
    
  }

}

const STATUS = [
  { value: 1, name: "Đang hoạt động" },
  { value: 0, name: "Dừng hoạt động" },
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
  {
    key: "phone",
    type: "string"
  }
];

const FIELDS = [
  {
    label: "Tên đăng nhập",
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
  },
  {
    label: "Điện thoại",
    name: "phone"
  }
];

const MODALS = [
  {
    label: "Tên đăng nhập",
    fin: "username", // fin = for, id, name
    key: "username",
    type: "input",
    readonly: true,
  },
  {
    label: "Họ và tên",
    fin: "name", // fin = for, id, name
    key: "name",
    type: "input",
  },
  {
    label: "Vai trò",
    fin: "role", // fin = for, id, name
    key: "role",
    type: "select",
  },
  {
    label: "email",
    fin: "email", // fin = for, id, name
    key: "email",
    type: "input",
  },
  {
    label: "Điện thoại",
    fin: "phone", // fin = for, id, name
    key: "phone",
    type: "input",
  },
  {
    label: "Trạng thái",
    fin: "status",
    key: "status",
    type: "select"
  }
];


