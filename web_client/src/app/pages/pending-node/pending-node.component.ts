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
  public totalItems: number;
  public totalItems1: number;
  public totalItems2: number;
  private sizePage = 5;

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
    this.currentPage = currentPage;
    await this.nodeService.getNodeList(filter, currentPage, sizePage).then((data: any) => {
      this.totalItems = data.total;
      this.nodeList = data.data;
      if (this.nodeList == "") {
        this.checkNodeList = false;
      } else {
        this.checkNodeList = true;
      }
      
    }).catch(err => {
      this.currentPage = 1;
    });
    this.spinnerService.hide();
  }

  async getApprovedNodeList(filter, currentPage, sizePage) {
    this.spinnerService.show();
    this.currentPage = currentPage;
    await this.nodeService.getNodeList(filter, currentPage, sizePage).then((data: any) => {
      this.totalItems1 = data.total;   
      this.approveNodeList = data.data;
      if (this.approveNodeList == "") {
        this.checkApproveNodeList = false;
      } else {
        this.checkApproveNodeList = true;
      }
    }).catch(err => {
      this.currentPage = 1;
    });
    this.spinnerService.hide();
  }

  async getDisapprovedNodeList(filter, currentPage, sizePage) {
    this.spinnerService.show();
    this.currentPage = currentPage;
    await this.nodeService.getNodeList(filter, currentPage, sizePage).then((data: any) => {
      this.totalItems2 = data.total;
      this.disapproveNodeList = data.data;
      if (this.disapproveNodeList == "") {
        this.checkDisapproveNodeList = false;
      } else {
        this.checkDisapproveNodeList = true;
      }
    }).catch(err => {
      this.currentPage = 1;
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
    
    this.nodeService.updateStatus(this.currentNode._id, {status: "1"});
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
    key: "location_info",
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
    label: "Khu vực",
    name: "location_info",
  },
  {
    label: "IP",
    name: "ip",
  }
];
