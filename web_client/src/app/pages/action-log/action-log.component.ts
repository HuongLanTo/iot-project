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
  filter = {
    action_user: undefined,
    action_type: undefined,
    collection_store: undefined,
    action_time: undefined
  };
  currentActionLog: any = [];
  private currentPage: number = 1;
  public totalItems: number;
  private sizePage = 5;
  temp: any;

  // search
  searchActionUser: any = "";
  searchActionType: any = "";
  searchCollectionType: any = "";
  searchActionTime: any = ""

  constructor(
    private actionLogService: ActionlogService,
    private spinnerService: NgxSpinnerService,
  ) { }

  async ngOnInit() {
    await this.getActionLogList(this.filter, this.currentPage, this.sizePage);
    
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
    }).catch(err => {
      this.currentPage = 1;
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

  async search() {
    if (this.searchActionType.length == 0) {
      this.filter.action_type = undefined;
    } else {
      this.filter.action_type = this.searchActionType;
    }
    if (this.searchActionUser.length == 0) {
      this.filter.action_user = undefined;
    } else {
      this.filter.action_user = this.searchActionUser;
    }
    if (this.searchCollectionType.length == 0) {
      this.filter.collection_store = undefined;
    } else {
      this.filter.collection_store = this.searchCollectionType;
    }
    if (this.searchActionTime.length == 0) {
      this.filter.action_time = undefined;
    } else {
      this.filter.action_time = this.searchActionTime;
    }
    this.currentPage = 1;
    await this.getActionLogList(this.filter, this.currentPage, this.sizePage);
  }

  async reset() {
    this.filter.action_time = undefined;
    this.filter.action_user = undefined;
    this.filter.action_type = undefined;
    this.filter.collection_store = undefined;
    this.searchActionTime = this.searchActionType = this.searchActionUser = this.searchCollectionType = "";
    this.currentPage = 1;
    await this.getActionLogList(this.filter, this.currentPage, this.sizePage);
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
