import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { NodeService } from "src/app/services/node.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { LocationService } from "src/app/services/location.service";

@Component({
  selector: "app-new-node",
  templateUrl: "./new-node.component.html",
  styleUrls: ["./new-node.component.css"],
})
export class NewNodeComponent implements OnInit {
  public newNode = {
    id: "",
    nameNode: "",
    location: "",
    address: "",
    so2: "",
    no: "",
    buipm25: "",
    temperature: "",
    humidity: "",
    latitude: "",
    longitude: "",
    status: ""
  };
  public locations: any;

  // declare invalid variables
  isNodenameInvalid: boolean = true;
  isLocationInvalid: boolean = false;
  isLatitudeInvalid: boolean = false;
  isLongitudeInvalid: boolean = false;
  isAddressInvalid: boolean = false;


  constructor(
    private http: Http,
    private nodeService: NodeService,
    private toastrService: ToastrService,
    private router: Router,
    private locationService: LocationService
  ) {}

  async ngOnInit() {
    await this.locationService.getLocationList().then((data) => {
      this.locations = data;
    });
  }

  createNode() {
    if (!this.newNode.location) {
      this.isLocationInvalid = true;
    } else {
      this.isLocationInvalid = false;
    }
    if (!this.newNode.latitude) {
      this.isLatitudeInvalid = true;
    } else {
      this.isLatitudeInvalid = false;
    }
    if (!this.newNode.longitude) {
      this.isLongitudeInvalid = true;
    } else {
      this.isLongitudeInvalid = false;
    }
    if (!this.newNode.address) {
      this.isAddressInvalid = true;
    } else {
      this.isAddressInvalid = false;
    }
    if (!this.isLatitudeInvalid && !this.isLongitudeInvalid && !this.isLocationInvalid) {
      this.newNode.status = 'true';
      this.nodeService
        .createNode(this.newNode)
        .then((data) => {
          this.toastrService.success("Tạo mới node thành công");
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

  checkLatitude(value: any) {
    if (value) {
      this.isLatitudeInvalid = false;
    } else {
      this.isLatitudeInvalid = true;
    }
  }

  checkLongitude(value: any) {
    if (value) {
      this.isLongitudeInvalid = false;
    } else {
      this.isLongitudeInvalid = true;
    }
  }

  checkAddress(value: any) {
    if (value) {
      this.isAddressInvalid = false;
    } else {
      this.isAddressInvalid = true;
    }
  }

  checkLocation(value: any) {
    if (value) {
      this.isLocationInvalid = false;
      this.newNode.location = value;
      var numberNode = this.getNumberOfNode(value) + 1;
      this.newNode.nameNode = value + '_' + numberNode;
      this.isNodenameInvalid = false;
    } else {
      this.isLocationInvalid = true;
    }
  }

  getNumberOfNode(value: any):number {
    for (var i = 0; i < this.locations.length; i++) {
      if (this.locations[i].name === value) {
        return this.locations[i].numberNode;
      }
    }
    
  }
}
