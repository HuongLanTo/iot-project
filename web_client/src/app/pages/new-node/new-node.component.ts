import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { NodeService } from "src/app/services/node.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { LocationService } from "src/app/services/location.service";
import { ProfileService } from "src/app/services/profile.service";

@Component({
  selector: "app-new-node",
  templateUrl: "./new-node.component.html",
  styleUrls: ["./new-node.component.css"],
})
export class NewNodeComponent implements OnInit {
  public newNode = {
    name: "",
    location: "",
    co2_status: "",
    co_status: "",
    dust_status: "",
    temperature_status: "",
    humidity_status: "",
    status: "",
    approve: "",
    ip: "",
    created_by: ""
  };
  private id_current_user = "";
  public locationList: any;

  // declare invalid variables
  isNameInvalid: boolean = false;
  isLocationInvalid: boolean = false;
  isIpInvalid: boolean = false;


  constructor(
    private nodeService: NodeService,
    private toastrService: ToastrService,
    private router: Router,
    private locationService: LocationService,
    private profileSerive: ProfileService
  ) {}

  async ngOnInit() {
    await this.nodeService.getNodeListNoFilter().then((data: any) => {
      var temp = data.total + 1;
      this.newNode.name = "Node " + temp;
    })
    await this.getLocationList();
  }

  createNode() {
    if (!this.newNode.location) {
      this.isLocationInvalid = true;
    } else {
      this.isLocationInvalid = false;
    }
    if (!this.newNode.ip) {
      this.isIpInvalid = true;
    } else {
      this.isIpInvalid = false;
    }
    if (!this.newNode.name) {
      this.isNameInvalid = true;
    } else {
      this.isNameInvalid = false;
    }
    if (!this.isIpInvalid && !this.isNameInvalid && !this.isLocationInvalid) {
      this.newNode.approve = "0";
      this.newNode.status = "0";
      this.newNode.created_by = this.id_current_user;
      this.nodeService
        .createNode(this.newNode)
        .then((data) => {
          this.toastrService.success("Node mới tạo đang trong danh sách chờ phê duyệt");
          this.router.navigate(["/node"]);
        })
        .catch((err) => {
          this.toastrService.warning("Tạo mới node thất bại");
        });
    }
  }

  redirect() {
    this.router.navigate(["/node"]);
  }

  async getLocationList() {
    await this.locationService.getLocationListNoFilter().then((data: any) => {
      this.locationList = data.data;
    })
  }


  checkName(value: any) {
    if (value) {
      this.isNameInvalid = false;
    } else {
      this.isNameInvalid = true;
    }
  }

  checkLocation(value: any) {
    if (value) {
      this.isLocationInvalid = false;
    } else {
      this.isLocationInvalid = true;
    }
  }

  checkIp(value: any) {
    if (value) {
      this.isIpInvalid = false;
    } else {
      this.isIpInvalid = true;
    }
  }

  // getNumberOfNode(value: any):number {
  //   for (var i = 0; i < this.locationList.length; i++) {
  //     if (this.locationList[i].name === value) {
  //       return this.locationList[i].numberNode;
  //     }
  //   }
  // }
}
