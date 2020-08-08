import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { stringify } from 'querystring';
import { RoleService } from 'src/app/services/role.service';
import { find } from 'rxjs-compat/operator/find';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  private checkCreateNodeRole = false;
  private checkEditNodeRole = false;
  userList: any = [];
  roleList: any = [];
  public newUser = {
    _id: "",
    username: "",
    approve: "",
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "",
    status: ""
  };
  roles: any;

  private filter = {};
  private currentPage: number = 1;
  private sizePage = 5;

  // declare variables to check validation of inputs
  checkValidationEmail = {
    length: true,
    unique: true
  };
  checkValidationName = {
    length: true
  }
  checkValidationPhone = {
    length: true,
    unique: true
  }


  // declare invalid variables
  isUsernameInvalid: boolean = false;
  isNameInvalid: boolean = false;
  isRoleInvalid: boolean = false;
  isEmailInvalid: boolean = false;
  isPhoneInvalid: boolean = false;

  checkInput: boolean = false;

  // isAdminChecked: boolean = false;
  // isCreateUserChecked: boolean = false;
  // isEditUserChecked: boolean = false;
  // isApproveUserChecked: boolean = false;
  // isCreateNodeChecked: boolean = false;
  // isEditNodeChecked: boolean = false;
  
  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private toastrService: ToastrService,
    private router: Router
  ) { 
    this.newUser = {
      _id: "",
      username: "",
      approve: "",
      name: "",
      email: "",
      password: "",
      phone: "",
      role: "",
      status: "",
    };
  }

  async ngOnInit() {
    var temp;
    await this.userService.getUserList(this.filter, this.currentPage, this.sizePage).then((data: any) => {
      temp = data.total + 1;
      if (data.total < 10) {
        this.newUser.username = "A000" + temp;
      } else if (data.total >= 10) {
        this.newUser.username = "A00" + temp;
      }
    });
    
    await this.userService.getUserList(this.filter, 1, temp).then((data: any) => {
      this.userList = data.data;
    })
    await this.getRoleList();
  }

  async getRoleList() {
    await this.roleService.getRoles().then((data: any) => {
      this.roleList = data.data;
      console.log(this.roleList);
      
    })
  }

  createUser() {
    if (!this.newUser.username) {
      this.isUsernameInvalid = true;
    } else {
      this.isUsernameInvalid = false;
    }
    if (!this.newUser.name) {
      this.isNameInvalid = true;
    } else {
      this.isNameInvalid = false;
    }
    if (!this.newUser.role) {
      this.isRoleInvalid = true;
    } else {
      this.isRoleInvalid = false;
    }
    if (!this.newUser.email) {
      this.isEmailInvalid = true;
    } else {
      this.isEmailInvalid = false;
    }
    if (!this.newUser.phone) {
      this.isPhoneInvalid = true;
    } else {
      this.isPhoneInvalid = false;
    }
    if (this.newUser.name.length >= 5 && this.newUser.name.length <= 255) {
      this.checkValidationName.length = true;
    } else {
      this.checkValidationName.length = false;
    }
    if (this.newUser.email.length >= 6 && this.newUser.email.length <= 255) {
      this.checkValidationEmail.length = true;
    } else {
      this.checkValidationEmail.length = false;
    }
    if (!this.isUsernameInvalid && !this.isNameInvalid && !this.isRoleInvalid && !this.isEmailInvalid && !this.isPhoneInvalid) {
      this.newUser.approve = "0";
      this.newUser.status = "0";
      this.newUser.password = "123456";
      this.userService.createUser(this.newUser)
        .then((data) => {
          this.toastrService.success("Tài khoản đang trong danh sách chờ phê duyệt");
          this.router.navigate(["/user"]);
        })
        .catch((err) => {
          this.toastrService.warning("Yêu cầu tạo tài khoản thất bại");
        });
    }
  }

  redirect() {
    this.newUser = {
      _id: "",
      username: "",
      approve: "",
      name: "",
      email: "",
      password: "",
      phone: "",
      role: "",
      status: ""
    };
    this.router.navigate(["/new-user"]);
  }

  checkValue(event: any) {
    console.log(event);
  }

  checkUsername(value: any) {
    if (value) {
      this.isUsernameInvalid = false;
    } else {
      this.isUsernameInvalid = true;
    }
  }

  checkName(value: any) {
    if (value) {
      this.isNameInvalid = false;
    } else {
      this.isNameInvalid = true;
    }
    if (value.length >= 5 && value.length <= 255) {
      this.checkValidationName.length = true;
    } else {
      this.checkValidationName.length = false;
    }
  }

  checkRole(value: any) {
    if (value) {
      this.isRoleInvalid = false;
    } else {
      this.isRoleInvalid = true;
    }
  }

  checkEmail(value: any) {
    if (value) {
      this.isEmailInvalid = false;
    } else {
      this.isEmailInvalid = true;
    }
    if (value.length >= 6 && value.length <= 255) {
      this.checkValidationEmail.length = true;
    } else {
      this.checkValidationEmail.length = false;
    }
    if (!!this.userList.find(e => e.email == value)) {
      this.checkValidationEmail.unique = false;
    } else {
      this.checkValidationEmail.unique = true;
    }
  }

  checkPhone(value: any) {
    if (value) {
      this.isPhoneInvalid = false;
    } else {
      this.isPhoneInvalid = true;
    }
    if (!!this.userList.find(e => e.phone == value)) {
      this.checkValidationPhone.unique = false;
    } else {
      this.checkValidationPhone.unique = true;
    }
  }
}

const ROLES = [
  {_id:'5ef888abf768fa241cb226f5', role: 'Vai trò 1'},
  {_id:'2', role: 'Vai trò 2'},
];
