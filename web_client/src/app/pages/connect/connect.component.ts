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
    await this.getConnectingManagementList();
  }

  get fields() {
    return FIELDS;
  }

  async getConnectingManagementList() {
    this.spinnerService.show();
    await this.connectService.getConnectingManagementList().then((data: any) => {
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
    name: "last_time_recieve",
  },
  {
    label: "Dữ liệu",
    name: "last_data_recieve"
  },
];
