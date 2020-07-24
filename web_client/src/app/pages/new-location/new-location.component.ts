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
    province: "",
    district: "",
    sub_district: "",
    detail_location: "",
    // numberNode: "",
    // numberActiveNode: "",
    // numberDeactiveNode: "",
    latitude: "",
    longitude: "",
  };

  provinceList: any;
  districtList: any;
  sub_districtList: any;
  chosenProvince = "";
  chosenDistrict= "";
  chosenSubDistrict = "";

  // declare invalid variables
  isProvinceInvalid: boolean = false;
  isDistrictInvalid: boolean = false;
  isSubDistrictInvalid: boolean = false;
  isDetailLocationInvalid: boolean = false;
  isLatitudeInvalid: boolean = false;
  isLongitudeInvalid: boolean = false;

  checkSelectedProvince = false; 
  checkSelectedDistrict = false; 

  provinceCode: number;
  districtCode: number;

  constructor(
    private locationService: LocationService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.getProvinceList();
    this.getDistrictList();
    this.getSubDistrictList();
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
    if (!this.newLocation.detail_location) {
      this.isDetailLocationInvalid = true;
    } else {
      this.isDetailLocationInvalid = false;
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
    if (!this.isProvinceInvalid && !this.isDistrictInvalid && !this.isSubDistrictInvalid && !this.isDetailLocationInvalid && !this.isLatitudeInvalid && !this.isLongitudeInvalid) {
      // this.newLocation.numberNode = this.newLocation.numberActiveNode = this.newLocation.numberDeactiveNode = "0";
      console.log(this.newLocation);
      
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

  async getSubDistrictList() {
    this.locationService.getSubDistrictList().then(data => {
      this.sub_districtList = data;
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
      this.districtCode = value.code;
      this.checkSelectedDistrict = true;
      this.newLocation.district = value._id;
    } else {
      this.isDistrictInvalid = true;
      this.checkSelectedDistrict = false;
    }
  }

  checkSubDistrict(value: any) {
    if (value) {
      this.isSubDistrictInvalid = false;
      this.newLocation.sub_district = value._id;
    } else {
      this.isSubDistrictInvalid = true;
    }
  }

  checkDetail(value: any) {
    if (value) {
      this.isDetailLocationInvalid = false;
    } else {
      this.isDetailLocationInvalid = true;
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
