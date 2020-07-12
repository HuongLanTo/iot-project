import { Component, OnInit } from '@angular/core';
import { District, district_data } from 'src/app/data/district';
import { LocationService } from 'src/app/services/location.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.css']
})
export class NewLocationComponent implements OnInit {
  public newLocation = {
    id: "",
    province: "",
    district: "",
    sub_district: "",
    detail: "",
    numberNode: "",
    numberActiveNode: "",
    numberDeactiveNode: "",
    latitude: "",
    longitude: "",
  };

  provinceList: any;
  districtList: any;
  chosenProvince = "";
  chosenDistrict = "";

  // declare invalid variables
  isProvinceInvalid: boolean = false;
  isDistrictInvalid: boolean = false;
  isSubDistrictInvalid: boolean = false;
  isDetailInvalid: boolean = false;
  isLatitudeInvalid: boolean = false;
  isLongitudeInvalid: boolean = false;

  checkSelectedProvince = false; 
  checkSelectedDistrict = false; 

  provinceCode: number;

  constructor(
    private locationService: LocationService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.getProvinceList();
    this.getDistrictList();
  }

  createLocation() {
    if (!this.newLocation.province) {
      this.isProvinceInvalid = true;
    } else {
      this.isProvinceInvalid = false;
    }
    if (!this.newLocation.district) {
      this.isDistrictInvalid = true;
    } else {
      this.isDistrictInvalid = false;
    }
    if (!this.newLocation.sub_district) {
      this.isSubDistrictInvalid = true;
    } else {
      this.isSubDistrictInvalid = false;
    }
    if (!this.newLocation.detail) {
      this.isDetailInvalid = true;
    } else {
      this.isDetailInvalid = false;
    }
    if (!this.newLocation.latitude) {
      this.isLatitudeInvalid = true;
    } else {
      this.isLatitudeInvalid = false;
    }
    if (!this.newLocation.longitude) {
      this.isLongitudeInvalid = true;
    } else {
      this.isLongitudeInvalid = false;
    }
    if (!this.isProvinceInvalid && !this.isDistrictInvalid && !this.isSubDistrictInvalid && !this.isDetailInvalid && !this.isLatitudeInvalid && !this.isLongitudeInvalid) {
      this.newLocation.numberNode = this.newLocation.numberActiveNode = this.newLocation.numberDeactiveNode = "0";
      this.locationService.createLocation(this.newLocation)
        .then(data => {
          this.toastrService.success("Tạo mới khu vực thành công");
          this.router.navigate(["/location"]);
        })
        .catch(err => {
          this.toastrService.warning("Tạo mới khu vực thất bại");
        });
    }
  }

  redirect() {
    this.router.navigate(["/location"]);
  }

  async getProvinceList() {
    this.locationService.getProvinceList().then(data => {
      this.provinceList = data;
    })
  }

  async getDistrictList() {
    this.locationService.getDistrictList().then(data => {
      this.districtList = data;
    })
  }

  checkProvince(value: any) {
    if (value) {
      this.isProvinceInvalid = false;
      this.provinceCode = value.code;
      this.checkSelectedProvince = true;
      this.newLocation.province = value._id;;
    } else {
      this.isProvinceInvalid = true;
      this.checkSelectedProvince = false;
    }
  }

  checkDistrict(value: any) {
    if (value) {
      this.isDistrictInvalid = false;
      this.newLocation.district = value._id;
    } else {
      this.isDistrictInvalid = true;
    }
  }

  checkSubDistrict(value: any) {
    if (value) {
      this.isSubDistrictInvalid = false;
    } else {
      this.isSubDistrictInvalid = true;
    }
  }

  checkDetail(value: any) {
    if (value) {
      this.isDetailInvalid = false;
    } else {
      this.isDetailInvalid = true;
    }
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

}
