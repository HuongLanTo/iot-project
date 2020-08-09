import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/services/connect.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
  filter = {};
  currentPage = 1;
  sizePage = 5;
  totalItems: number;
  connectList: any = [];
  constructor(
    private connectService: ConnectService,
    private spinnerService: NgxSpinnerService
  ) { }

  async ngOnInit() {
    await this.getConnectingManagementList(this.filter, this.currentPage, this.sizePage);
  }

  get fields() {
    return FIELDS;
  }
  async getConnectingManagementList(filter, currentPage, sizePage) {
    this.spinnerService.show();
    this.currentPage = currentPage;
    this.connectService.getConnectingManagementList(filter, currentPage, sizePage).then((data: any) => {
      this.connectList = data.data;
      this.totalItems = data.total;
    }).catch(err => {
      this.currentPage = 1;
    });
    this.spinnerService.hide();
  };

}

const FIELDS = [
  {
    label: "IP",
    name: "ip",
  },
  {
    label: "Thời gian nhận dũ liệu cuối cùng",
    name: "datetime",
  },
  {
    label: "Dữ liệu",
    name: "action_time"
  },
];
