import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Role, role } from 'src/app/models/role';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  private checkCreateNodeRole = false;
  private checkEditNodeRole = false;
  public newUser = {
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

  // declare invalid variables
  isUsernameInvalid: boolean = false;
  isNameInvalid: boolean = false;
  isRoleInvalid: boolean = false;

  isAdminChecked: boolean = false;
  isCreateUserChecked: boolean = false;
  isEditUserChecked: boolean = false;
  isApproveUserChecked: boolean = false;
  isCreateNodeChecked: boolean = false;
  isEditNodeChecked: boolean = false;
  
  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  get roles() {
    return ROLES;
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
    if (!this.isUsernameInvalid && !this.isNameInvalid && !this.isRoleInvalid) {
      this.newUser.approve = "-1";
      this.newUser.password = "123456";
      this.userService.createUser(this.newUser)
        // .then((data) => {
        //   this.toastrService.success("Tài khoản đang trong danh sách chờ phê duyệt");
        //   this.router.navigate(["/new-node"]);
        // })
        // .catch((err) => {
        //   this.toastrService.warning("Yêu cầu tạo tài khoản thất bại");
        // });
    }
  }

  redirect() {
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
  }

  checkRole(value: any) {
    if (value) {
      this.isRoleInvalid = false;
    } else {
      this.isRoleInvalid = true;
    }
  }
}

const ROLES = [
  {_id:'1', role: 'Vai trò 1'},
  {_id:'2', role: 'Vai trò 2'},
];
