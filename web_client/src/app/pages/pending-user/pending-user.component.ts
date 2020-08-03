import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pending-user',
  templateUrl: './pending-user.component.html',
  styleUrls: ['./pending-user.component.css']
})
export class PendingUserComponent implements OnInit {
  public userList: any;
  public approveUserList: any;
  public disapproveUserList: any;
  public filter = {
    approve: ""
  };
  public currentUser: any = {};
  private currentPage: number = 1;
  private totalItems: number;
  private totalItems1: number;
  private totalItems2: number;
  private sizePage = 5;

  pageOfItems: Array<any>;
  pageOfItems1: Array<any>;
  pageOfItems2: Array<any>;

  //check
  checkUserList = true;
  checkApproveUserList = true;
  checkDisapproveUserList = true;

  constructor(
    private userService: UserService,
    private spinnerService: NgxSpinnerService,
    private toastrService: ToastrService
  ) { }

  get key_data() {
    return KEY_DATA;
  }

  get fields() {
    return FIELDS;
  }

  async ngOnInit() {
    await this.getPending();
  }

  async getUserList(filter, currentPage, sizePage) {
    this.spinnerService.show();
    this.currentPage = currentPage;
    await this.userService.getUserList(filter, currentPage, sizePage).then((data: any) => {
      this.totalItems = data.totalDocuments;
      this.userList = data.data;
      if (this.userList == "") {
        this.checkUserList = false;
      } else {
        this.checkUserList = true;
      }
      
    });
    this.spinnerService.hide();
  }

  async getApprovedUserList(filter, currentPage, sizePage) {
    this.spinnerService.show();
    this.currentPage = currentPage;
    await this.userService.getUserList(filter, currentPage, sizePage).then((data: any) => {
      this.totalItems1 = data.totalDocuments;
      this.approveUserList = data.data;
      if (this.approveUserList == "") {
        this.checkApproveUserList = false;
      } else {
        this.checkApproveUserList = true;
      }
    });
    this.spinnerService.hide();
  }

  async getDisapprovedUserList(filter, currentPage, sizePage) {
    this.spinnerService.show();
    this.currentPage = currentPage;
    await this.userService.getUserList(filter, currentPage, sizePage).then((data: any) => {
      this.totalItems2 = data.totalDocuments;
      this.disapproveUserList = data.data;
      if (this.disapproveUserList == "") {
        this.checkDisapproveUserList = false;
      } else {
        this.checkDisapproveUserList = true;
      }
    });
    this.spinnerService.hide();
  }

  approve() {
    this.userService.approve(this.currentUser._id, {approve: "1"})
      .then(data => {
        this.toastrService.success("Tài khoản đã được phê duyệt thành công");
        this.getPending();
      })
      .catch(err => {
        this.toastrService.warning("Xảy ra lỗi trong quá trình phê duyệt tài khoản");
      });
    this.userService.updateStatus(this.currentUser._id, {status: "1"});
  }

  disapprove() {
    this.userService.approve(this.currentUser._id, {approve: "-1"})
      .then(data => {
        this.toastrService.success("Tài khoản đã bị từ chối phê duyệt");
        this.getPending();
      })
      .catch(err => {
        this.toastrService.warning("Xảy ra lỗi trong quá trình từ chối phê duyệt tài khoản");
      });
  }

  getApprove() {
    this.filter.approve = "1";
    this.currentPage = 1;
    this.getApprovedUserList(this.filter, this.currentPage, this.sizePage);
  }

  getDisapprove() {
    this.filter.approve = "-1";
    this.currentPage = 1;
    this.getDisapprovedUserList(this.filter, this.currentPage, this.sizePage);
  }

  getPending() {
    this.filter.approve = "0";
    this.currentPage = 1;
    this.getUserList(this.filter, this.currentPage, this.sizePage);
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
  {
    key: "phone",
    type: "string"
  }
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
  },
  {
    label: "Điện thoại",
    name: "phone"
  }
];
