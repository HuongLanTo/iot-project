import { Component, OnInit } from "@angular/core";
import { NodeService } from "../../services/node.service";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-node",
  templateUrl: "./node.component.html",
  styleUrls: ["./node.component.css"],
})
export class NodeComponent implements OnInit {
  nodeList: any;
  currentNode: any = {};
  Status = [
    { status: true, name: "Active" },
    { status: false, name: "Deactive" },
  ];

  //paginaton
  public filter = {
    // approve: "1"
  };
  private currentPage: number = 1;
  private showPages: number;
  private totalPage: number;
  private sizePage = 10;

  //search
  searchNodename = '';
  searchLocation = '';
  searchAddress = '';
  searchStatus = '';

  constructor(
    private nodeService: NodeService,
    private toastrService: ToastrService,
    private spinnerService: NgxSpinnerService
  ) {}

  async ngOnInit() {
    await this.getNodeList(this.filter, this.currentPage, this.sizePage);
    
  }

  get fields() {
    return FIELDS;
  }

  get envs() {
    return ENV;
  }

  get key_data() {
    return KEY_DATA;
  }

  get modal() {
    return MODAL;
  }

  get data() {
    return {
      status: STATUS,
      sensor: SENSOR,
    };
  }

  is_string(type: string) {
    return type === "string";
  }

  is_boolean(type: string) {
    return type === "boolean";
  }

  is_input(type: string) {
    return type === "input";
  }

  is_select(type: string) {
    return type === "select";
  }

  is_switch(type: string) {
    return type === "switch";
  }

  status(value: string | number) {
    return value ? "Đang hoạt động" : "Dừng hoạt động";
  }

  async getNodeList(filter, currentPage, sizePage) {
    this.spinnerService.show();
    await this.nodeService.getNodeList(filter, currentPage, sizePage).then(data => {
      this.totalPage = Math.ceil(10 / sizePage);
      if(this.totalPage <= this.showPages)
        this.showPages = this.totalPage;
      this.showPages = 3;    
      this.nodeList = data;
    })
    this.spinnerService.hide();
  }

  async updateNodeInfo() {
    await this.nodeService
      .updateNodeInfo(this.currentNode._id, {
        temperature_status: this.currentNode.temperature_status,
        humidity_status: this.currentNode.humidity_status,
        co_status: this.currentNode.co_status,
        nh3_status: this.currentNode.nh3_status,
        dust_status: this.currentNode.dust_status
      })
      .then((data) => {
        this.toastrService.success("Cập nhật thông tin node thành công");
        this.getNodeList(this.filter, this.currentPage, this.sizePage);
      })
      .catch((err) => {
        this.toastrService.warning("Cập nhật thông tin node thất bại");
      });
  }

  getNodeListFromNodename() {
    // var tempList = [];
    // if (this.searchNodename === '') {
    //   this.nodeList = this.nodeListFull
    // } else {
    //   this.nodeListFull.forEach(e => {
    //     if (e.nameNode.includes(this.searchNodename)) {
    //       tempList.push(e);
    //     }
    //   });
    //   this.nodeList = tempList;
    // }
    
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
  },
  {
    key: "status",
    type: "boolean",
  },
  {
    key: "temperature_status",
    type: "boolean",
  },
  {
    key: "humidity_status",
    type: "boolean",
  },
  {
    key: "nh3_status",
    type: "boolean",
  },
  {
    key: "dust_status",
    type: "boolean",
  },
  {
    key: "co_status",
    type: "boolean",
  }
];

const FIELDS = [
  {
    label: "Tên node",
    name: "name",
  },
  {
    label: "Khu vực",
    name: "location",
  },
  {
    label: "IP",
    name: "ip",
  },
  {
    label: "Trạng thái",
    name: "status",
  }
];

const ENV = [
  {
    label: "Nhiệt độ",
  },
  {
    label: "Độ ẩm",
  },
  {
    label: "NH3",
  },
  {
    label: "CO",
  },
  {
    label: "Bụi PM 2.5",
  },
  {
    label: "Lựa chọn",
  },
];

const MODAL = [
  {
    label: "Tên node",
    fin: "name", // fin = for, id, name
    key: "name",
    type: "input",
    readonly: true,
  },
  {
    label: "Trạng thái",
    fin: "status", // fin = for, id, name
    key: "status",
    type: "select",
  },
  {
    label: "Khu vực",
    fin: "location", // fin = for, id, name
    key: "location",
    type: "input",
    readonly: true,
  },
  {
    label: "IP",
    fin: "ip", // fin = for, id, name
    key: "ip",
    type: "input",
    readonly: true,
  },
  {
    label: "Cảm biến",
    fin: "sensor", // fin = for, id, name
    key: "sensor",
    type: "switch",
  },
];

const STATUS = [
  { value: true, name: "Đang hoạt động" },
  { value: false, name: "Dừng hoạt động" },
];

const SENSOR = [
  {
    label: "Nhiệt độ",
    fin: "temperatureStatus",
    key: "temperature_status",
  },
  {
    label: "Độ ẩm",
    fin: "humidityStatus",
    key: "humidity_status",
  },
  {
    label: "NH3",
    fin: "nh3Status",
    key: "nh3_status",
  },
  {
    label: "CO",
    fin: "coStatus",
    key: "co_status",
  },
  {
    label: "Bụi PM2.5",
    fin: "dustStatus",
    key: "dust_status",
  },
];
