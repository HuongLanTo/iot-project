import { Component, OnInit } from "@angular/core";
import { NodeService } from "../../services/node.service";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { ProfileService } from "src/app/services/profile.service";
import { LocationService } from "src/app/services/location.service";

@Component({
  selector: "app-node",
  templateUrl: "./node.component.html",
  styleUrls: ["./node.component.css"],
})
export class NodeComponent implements OnInit {
  nodeList: any = [];
  districtList: any = [];
  currentNode: any = {};

  public filter = {
    approve: "1",
    status: undefined,
    name: undefined,
    district: undefined,
    location_info: undefined
  };
  public filter1 = {
    approve: "1",
    status: undefined,
    name: undefined,
    district: undefined,
    location_info: undefined
  };
  private currentPage: number = 1;
  private totalItems: number;
  private sizePage = 5;

  // check permission
  private isHavingEditNodePermission: boolean = true;
  private provinceCode = [];

  //search
  searchName = "";
  searchDistrict = "";
  searchDetailLocation = "";
  searchStatus = "";

  // check 
  check = true;

  constructor(
    private nodeService: NodeService,
    private profileService: ProfileService,
    private locationService: LocationService,
    private toastrService: ToastrService,
    private spinnerService: NgxSpinnerService
  ) {}

  async ngOnInit() {
    await this.checkEditNodePermission();
    this.locationService.getDistrictList().then(data => this.districtList = data);
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

  status_vn(value: string | number) {
    return value ? "Đang hoạt động" : "Dừng hoạt động";
  }

  async getNodeList(filter, currentPage, sizePage) {
    this.spinnerService.show();
    this.currentPage = currentPage;
    await this.nodeService.getNodeList(filter, currentPage, sizePage).then((data: any) => {
      this.check = true;
      this.totalItems = data.total;
      this.nodeList = data.data;
      console.log(this.nodeList);
      console.log(data);
      
    }).catch(err => {
      this.check = false;
      this.currentPage = 1;
    })
    this.spinnerService.hide();
  }

  async updateNodeInfo() {
    await this.nodeService
      .updateNodeInfo(this.currentNode._id, {
        temperature_status: this.currentNode.temperature_status,
        humidity_status: this.currentNode.humidity_status,
        co_status: this.currentNode.co_status,
        co2_status: this.currentNode.co2_status,
        dust_status: this.currentNode.dust_status
      })
      .then((data) => {
        this.toastrService.success("Cập nhật thông tin node thành công");
      })
      .catch((err) => {
        this.toastrService.warning("Cập nhật thông tin node thất bại");
      });
    
    await this.nodeService.updateStatus(this.currentNode._id, {
      status: this.currentNode.status
    })
    .then(data => {})
    .catch(err => {
      this.toastrService.warning("Cập nhật trạng thái node thất bại");
    })
  }

  async checkEditNodePermission() {
    var nameRole = "";
    var actionName = [];
    var areaName = [];
    await this.profileService.getProfile().then((data: any) => {
      nameRole = data.role.name;
      actionName = data.role.action_permission;
      areaName = data.role.area_permission;
    })
    if (nameRole == "Admin") {
      this.isHavingEditNodePermission = true;;
    } else {
      var check = [];
      await actionName.forEach(e => {
        check.push(e.name);
      });
      if (actionName.includes("Tạo mới node")) {
        this.isHavingEditNodePermission = true;
        await areaName.forEach(e => {
          this.provinceCode.push(e._id);
        });
      } else {
        this.isHavingEditNodePermission = false;
      }
    }
    if (this.isHavingEditNodePermission == true) {
      this.getNodeList(this.filter1, this.currentPage, this.sizePage);
    } else {
      this.getNodeList(this.filter, this.currentPage, this.sizePage);
    }
  }

  getFullLocation() {
    if (!Object.keys(this.currentNode).length) {
      return
    }

    return this.currentNode.location_info.detail_location + 
          ', ' +
          this.currentNode.district.name + 
          ', ' +
          this.currentNode.province.name
  }

  async search() {
    if (this.searchName.length == 0) {
      this.filter.name = undefined;
    } else {
      this.filter.name = this.searchName;
    }
    if (this.searchDetailLocation.length == 0) {
      this.filter.location_info = undefined;
    } else {
      this.filter.location_info = this.searchDetailLocation;
    }
    if (this.searchDistrict.length == 0) {
      this.filter.district = undefined;
    } else {
      if (this.searchDistrict == "all") {
        this.filter.district = undefined;
      } else {
        this.filter.district = this.searchDistrict;
      }
    }
    if (this.searchStatus.length == 0) {
      this.filter.status = undefined;
    } else {
      if (this.searchStatus == "all") {
        this.filter.status = undefined;
      } else {
        this.filter.status = String(this.searchStatus);
      }
    }
    console.log(this.filter);
    
    this.currentPage = 1;
    await this.getNodeList(this.filter, this.currentPage, this.sizePage);
  }

  async reset() {
    this.filter.district = undefined;
    this.filter.name = undefined;
    this.filter.location_info = undefined;
    this.filter.status = undefined;
    this.searchName = this.searchDistrict = this.searchDetailLocation = this.searchStatus = "";
    this.currentPage = 1;
    await this.getNodeList(this.filter, this.currentPage, this.sizePage);
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
    key: "co2_status",
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
    name: "location_info",
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
    label: "CO2",
  },
  {
    label: "CO",
  },
  {
    label: "Bụi PM 2.5",
  }
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
    key: "location_info",
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
  // {
  //   label: "Cảm biến",
  //   fin: "sensor", // fin = for, id, name
  //   key: "sensor",
  //   type: "switch",
  // },
];

const STATUS = [
  { value: 1, name: "Đang hoạt động" },
  { value: 0, name: "Dừng hoạt động" },
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
    label: "CO2",
    fin: "co2Status",
    key: "co2_status",
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
