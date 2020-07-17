import { Component, OnInit } from '@angular/core';
import { NodeService } from 'src/app/services/node.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pending-node',
  templateUrl: './pending-node.component.html',
  styleUrls: ['./pending-node.component.css']
})
export class PendingNodeComponent implements OnInit {
  public nodeList: any;
  public approveNodeList: any;
  public disapproveNodeList: any;
  public filter = {
    approve: ""
  };
  public currentNode: any = {};
  private currentPage: number = 1;
  private showPages: number = 5;
  private showPages1: number = 5;
  private showPages2: number = 5;
  private totalPage: number;
  private totalPage1: number;
  private totalPage2: number;
  private sizePage = 10;

  //check
  checkNodeList = true;
  checkApproveNodeList = true;
  checkDisapproveNodeList = true;

  constructor(
    private nodeService: NodeService,
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

  async getNodeList(filter, currentPage, sizePage) {
    this.spinnerService.show();
    await this.nodeService.getNodeList(filter, currentPage, sizePage).then((data: any) => {
      console.log(data);
      
      this.totalPage = Math.ceil(4 / sizePage);
      if(this.totalPage <= this.showPages)
        this.showPages = this.totalPage;
      this.showPages = 3;    
      this.nodeList = data;
      if (this.nodeList == "") {
        this.checkNodeList = false;
      } else {
        this.checkNodeList = true;
      }
      
    });
    this.spinnerService.hide();
  }

  async getApprovedNodeList(filter, currentPage, sizePage) {
    this.spinnerService.show();
    await this.nodeService.getNodeList(filter, currentPage, sizePage).then((data: any) => {
      this.totalPage1 = Math.ceil(4 / sizePage);
      if(this.totalPage1 <= this.showPages1)
        this.showPages1 = this.totalPage1;
      this.showPages1 = 3;    
      this.approveNodeList = data;
      if (this.approveNodeList == "") {
        this.checkApproveNodeList = false;
      } else {
        this.checkApproveNodeList = true;
      }
    });
    this.spinnerService.hide();
  }

  async getDisapprovedNodeList(filter, currentPage, sizePage) {
    this.spinnerService.show();
    await this.nodeService.getNodeList(filter, currentPage, sizePage).then((data: any) => {
      console.log(data);
      
      this.totalPage2 = Math.ceil(4 / sizePage);
      if(this.totalPage2 <= this.showPages2)
        this.showPages2 = this.totalPage2;
      this.showPages2 = 3;    
      this.disapproveNodeList = data;
      if (this.disapproveNodeList == "") {
        this.checkDisapproveNodeList = false;
      } else {
        this.checkDisapproveNodeList = true;
      }
    });
    this.spinnerService.hide();
  }

  approve() {
    this.nodeService.approve(this.currentNode._id, {approve: "1"})
      .then(data => {
        this.toastrService.success("Node đã được phê duyệt thành công");
        this.getPending();
      })
      .catch(err => {
        this.toastrService.warning("Xảy ra lỗi trong quá trình phê duyệt node");
      })
  }

  disapprove() {
    this.nodeService.approve(this.currentNode._id, {approve: "-1"})
      .then(data => {
        this.toastrService.success("Node đã bị từ chối phê duyệt");
        this.getPending();
      })
      .catch(err => {
        this.toastrService.warning("Xảy ra lỗi trong quá trình từ chối phê duyệt node");
      })
  }

  getApprove() {
    this.filter.approve = "1";
    this.currentPage = 1;
    this.getApprovedNodeList(this.filter, this.currentPage, this.sizePage);
  }

  getDisapprove() {
    this.filter.approve = "-1";
    this.currentPage = 1;
    this.getDisapprovedNodeList(this.filter, this.currentPage, this.sizePage);
  }

  getPending() {
    this.filter.approve = "0";
    this.currentPage = 1;
    this.getNodeList(this.filter, this.currentPage, this.sizePage);
  }

}

const KEY_DATA = [
  {
    key: "name",
    type: "string",
  },
  {
    key: "location",
    type: "string",
  },
  {
    key: "ip",
    type: "string",
  }
];

const FIELDS = [
  {
    label: "Tên node",
    name: "name",
  },
  {
    label: "Địa chỉ",
    name: "location",
  },
  {
    label: "IP",
    name: "ip",
  }
];
