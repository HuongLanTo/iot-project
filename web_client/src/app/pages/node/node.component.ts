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
  nodeListFull: any;
  currentNode: any = {};
  Status = [
    { status: true, name: "Active" },
    { status: false, name: "Deactive" },
  ];

  //paginaton
  public filter = "eyJuYW1lIjoiTm9kZSIsImRpc3RyaWN0IjoiNWVmODg4NDdmNzY4ZmEyNDFjYjIyNmYyIn0=";
  private currentPage: number = 1;
  private showPages: number = 5;
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
    await this.nodeService.getNodeList(filter, currentPage, sizePage).then(data => {
      this.totalPage = Math.ceil(data.totalDocuments / sizePage);
      if(this.totalPage <= this.showPages)
        this.showPages = this.totalPage;
      this.showPages = 3;    
      this.nodeList = data.data;
    })
  }

  updateNodeInfo() {
    this.nodeService
      .updateNodeInfo(this.currentNode.id, {
        so2: this.currentNode.so2,
        no: this.currentNode.no,
        buipm25: this.currentNode.buipm25,
        temperature: this.currentNode.temperature,
        humidity: this.currentNode.humidity,
        status: this.currentNode.status,
      })
      .then((data) => {
        this.toastrService.success("Cập nhật thông tin node thành công");
      })
      .catch((err) => {
        this.toastrService.warning("Cập nhật thông tin node thất bại");
      });
  }

  getNodeListFromNodename() {
    var tempList = [];
    if (this.searchNodename === '') {
      this.nodeList = this.nodeListFull
    } else {
      this.nodeListFull.forEach(e => {
        if (e.nameNode.includes(this.searchNodename)) {
          tempList.push(e);
        }
      });
      this.nodeList = tempList;
    }
    
  }

}

const KEY_DATA = [
  {
    key: "nameNode",
    type: "string",
  },
  {
    key: "location",
    type: "string",
  },
  {
    key: "address",
    type: "string",
  },
  {
    key: "temperature",
    type: "boolean",
  },
  {
    key: "humidity",
    type: "boolean",
  },
  {
    key: "so2",
    type: "boolean",
  },
  {
    key: "no",
    type: "boolean",
  },
  {
    key: "buipm25",
    type: "boolean",
  },
];

const FIELDS = [
  {
    label: "Tên node",
    placeholder: "Tìm kiếm node",
    name: "name",
  },
  {
    label: "Khu vực",
    placeholder: "Tìm kiếm khu vực",
    name: "location",
  },
  {
    label: "IP",
    placeholder: "Tìm kiếm IP",
    name: "ip",
  },
];

const ENV = [
  {
    label: "Nhiệt độ",
  },
  {
    label: "Độ ẩm",
  },
  {
    label: "SO2",
  },
  {
    label: "NO",
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
    fin: "nameNode", // fin = for, id, name
    key: "nameNode",
    type: "input",
    readonly: true,
  },
  {
    label: "Trạng thái",
    fin: "nameStatus", // fin = for, id, name
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
  { value: true, name: "Active" },
  { value: false, name: "Deactive" },
];

const SENSOR = [
  {
    label: "Nhiệt độ",
    fin: "temperatureStatus",
    key: "temperature",
  },
  {
    label: "Độ ẩm",
    fin: "humidityStatus",
    key: "humidity",
  },
  {
    label: "SO2",
    fin: "so2Status",
    key: "so2",
  },
  {
    label: "NO",
    fin: "noStatus",
    key: "no",
  },
  {
    label: "Bụi PM2.5",
    fin: "buipm25Status",
    key: "buipm25",
  },
];
