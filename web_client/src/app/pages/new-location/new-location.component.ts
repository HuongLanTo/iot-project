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
  district: District[] = district_data;
  currentDistrict: any = {};
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

  // declare invalid variables
  isDistrictInvalid: boolean = false;
  isSubDistrictInvalid: boolean = false;
  isDetailInvalid: boolean = false;
  isLatitudeInvalid: boolean = false;
  isLongitudeInvalid: boolean = false;

  checkSelectedDistrict = false; 

  constructor(
    private locationService: LocationService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createLocation() {
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
    if (!this.isDistrictInvalid && !this.isSubDistrictInvalid && !this.isDetailInvalid && !this.isLatitudeInvalid && !this.isLongitudeInvalid) {
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

  checkDistrict(value: any) {
    if (value) {
      this.district.forEach(e => {
        if (e.name == value) {
          this.currentDistrict = e;
        }
      });
      this.isDistrictInvalid = false;
      this.checkSelectedDistrict = true;
    } else {
      this.isDistrictInvalid = true;
      this.checkSelectedDistrict = false;
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
