import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActionlogService } from 'src/app/services/actionlog.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-action-log',
  templateUrl: './action-log.component.html',
  styleUrls: ['./action-log.component.css']
})
export class ActionLogComponent implements OnInit {
  actionLogList: any = [];
  filter = {};
  currentActionLog: any = {};
  private currentPage: number = 1;
  public totalItems: number;
  private sizePage = 5;
  temp: any;

  constructor(
    private actionLogService: ActionlogService,
    private spinnerService: NgxSpinnerService,
  ) { }

  async ngOnInit() {
    console.log(999);
    
    await this.getActionLogList(this.filter, this.currentPage, this.sizePage);
    console.log(999, this.actionLogList);
    console.log(this.actionLogList[0].request);
    
    
  }

  get fields() {
    return FIELDS;
  }

  get details() {
    return DETAILS;
  }

  async getActionLogList(filter, currentPage, sizePage) {
    this.spinnerService.show();
    this.currentPage = currentPage;
    await this.actionLogService.getActionLogList(filter, currentPage, sizePage).then((data: any) => {
      this.totalItems = data.total;
      this.actionLogList = data.data;
    });
    this.spinnerService.hide();
  }

  getModalInfo(field) {
    if (Object.keys(this.currentActionLog).length && this.currentActionLog[field.name]) {
      return this.currentActionLog[field.name][field.key]
    }
  }

  getTableInfo(data, name, key = '') {
    if (Object.keys(data).length && data[name]) {
      if (key) {
        return data[name][key]
      } else {
        return data[name]
      }
    }
  }
}

const FIELDS = [
  {
    label: "Kiểu tác động",
    name: "action_type",
  },
  {
    label: "Tên bảng",
    name: "collection_store",
  },
  {
    label: "Tài khoản tác động",
    name: "action_user",
    key: "username"
  },
  {
    label: "Thời gian tác động",
    name: "action_time"
  },
  {
    label: "Thời gian xử lý",
    name: "execution_time"
  },
];

const DETAILS = [
  {
    label: "Request",
    name: "request",
  },
  {
    label: "Response",
    name: "response",
  },
  {
    label: "Dữ liệu hiện tại",
    name: "current_data",
  }
]
