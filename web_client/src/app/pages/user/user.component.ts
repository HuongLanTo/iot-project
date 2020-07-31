import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UserService } from 'src/app/services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/services/role.service';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: any = [];
  roleList: any = [];
  private filter = {
    approve: "1",
    username: undefined,
    name: undefined,
    role: undefined,
    status: undefined
  };
  private currentUser: any = {};

  private currentPage: number = 1;
  public totalItems: number;
  private sizePage = 5;

  // check permission
  private isHavingEditUserPermission: boolean;

  // search
  searchUsername = "";
  searchName = "";
  searchRole = "";
  searchStatus = "";
  
  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private profileService: ProfileService,
    private spinnerService: NgxSpinnerService,
    private toastrService: ToastrService
  ) { }

  async ngOnInit() {
    await this.getUserList(this.filter, this.currentPage, this.sizePage);
    await this.getRoleList();
    this.checkEditUserPermission();
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
    this.currentPage = currentPage;
    await this.userService. getUserList(filter, currentPage, sizePage).then((data: any) => {
      this.totalItems = data.totalDocuments;
      this.userList = data.data;
    });
    this.spinnerService.hide();
  }

  updateUserInfo() {
    this.userService.updateUserInfo(this.currentUser._id, {
      name: this.currentUser.name,
      role: this.currentUser.role,
      email: this.currentUser.email,
      phone: this.currentUser.phone
    })
    .then(data => {
      this.toastrService.success("Cập nhật thông tin người dùng thành công.");
    })
    .catch((err) => {
      this.toastrService.warning("Cập nhật thông tin người dùng thất bại.");
    });
    this.userService.updateStatus(this.currentUser._id, {
      status: this.currentUser.status
    })
    .then(data => {})
    .catch(err => {
      this.toastrService.warning("Cập nhật trạng thái người dùng thất bại.")
    })
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

  async search() {
    if (this.searchUsername.length == 0) {
      this.filter.username = undefined;
    } else {
      this.filter.username = this.searchUsername;
    }
    if (this.searchName.length == 0) {
      this.filter.name = undefined;
    } else {
      this.filter.name = this.searchName;
    }
    if (this.searchRole.length == 0) {
      this.filter.role = undefined;
    } else {
      if (this.searchRole == "all") {
        this.filter.role = undefined;
      } else {
        this.filter.role = this.searchRole;
      }
    }
    if (this.searchStatus.length == 0) {
      this.filter.status = undefined;
    } else {
      if (this.searchStatus == "all") {
        this.filter.status = undefined;
      } else {
        this.filter.status = this.searchStatus;
      }
    }
    this.currentPage = 1;
    await this.getUserList(this.filter, this.currentPage, this.sizePage);
  }

  async reset() {
    this.filter.username = undefined;
    this.filter.name = undefined;
    this.filter.role = undefined;
    this.filter.status = undefined;
    this.searchName = this.searchUsername = this.searchRole = this.searchStatus = "";
    this.currentPage = 1;
    await this.getUserList(this.filter, this.currentPage, this.sizePage);
  }

  async checkEditUserPermission() {
    var nameRole = "";
    var actionName = [];
    await this.profileService.getProfile().then((data: any) => {
      nameRole = data.role.name;
      actionName = data.role.action_permission;
    })
    if (nameRole == "Admin") {
      this.isHavingEditUserPermission = true;;
    } else {
      var check = [];
      await actionName.forEach(e => {
        check.push(e.name);
      });
      if (actionName.includes("Tạo mới user")) {
        this.isHavingEditUserPermission = true;
      } else {
        this.isHavingEditUserPermission = false;
      }
    }
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


