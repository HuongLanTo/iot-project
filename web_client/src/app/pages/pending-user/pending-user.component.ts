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
  private showPages: number = 5;
  private showPages1: number = 5;
  private showPages2: number = 5;
  private totalPage: number;
  private totalPage1: number;
  private totalPage2: number;
  private sizePage = 5;

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
    await this.userService.getUserList(filter, currentPage, sizePage).then((data: any) => {
      this.totalPage = Math.ceil(data.totalDocuments / sizePage);
      if(this.totalPage <= this.showPages)
        this.showPages = this.totalPage;
      this.showPages = 3;    
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
    await this.userService.getUserList(filter, currentPage, sizePage).then((data: any) => {
      
      this.totalPage1 = Math.ceil(data.totalDocuments / sizePage);
      if(this.totalPage1 <= this.showPages1)
        this.showPages1 = this.totalPage1;
      this.showPages1 = 3;    
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
    await this.userService.getUserList(filter, currentPage, sizePage).then((data: any) => {
      this.totalPage2 = Math.ceil(data.totalDocuments / sizePage);
      if(this.totalPage2 <= this.showPages2)
        this.showPages2 = this.totalPage2;
      this.showPages2 = 3;    
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
      })
  }

  disapprove() {
    this.userService.approve(this.currentUser._id, {approve: "-1"})
      .then(data => {
        this.toastrService.success("Tài khoản đã bị từ chối phê duyệt");
        this.getPending();
      })
      .catch(err => {
        this.toastrService.warning("Xảy ra lỗi trong quá trình từ chối phê duyệt tài khoản");
      })
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
