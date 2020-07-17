import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { District, district_data } from 'src/app/data/district';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locationList: any;
  provinceList: any;
  districtList: any;
  currentLocation: any = {};
  searchProvince = "";
  searchDistrict = "";

  provinceCode: number;
  searchByProvince = "";
  searchByDistrict = "";
  checkCityCode = false;

  constructor(
    private locationService: LocationService,
    private spinnerService: NgxSpinnerService
  ) { }

  async ngOnInit() {
    await this.getLocationList();
    await this.getProvinceList();
    await this.getDistrictList();
  }

  get fields() {
    return FIELDS;
  }

  async getLocationList() {
    this.spinnerService.show();
    await this.locationService.getLocationList().then(data => {
      this.locationList = data;
    })
    this.spinnerService.hide();
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

  getProvinceCodeAndProvinceId(value) {
    this.checkCityCode = true
    this.provinceCode = value.code;
    this.searchByProvince = value._id;
    console.log(this.provinceCode, this.searchByProvince);
    
  }

  getDistrictId(value) {
    this.searchByDistrict = value._id;
    console.log(this.searchByDistrict);
    
  }

  search() {
    
  }

}

const KEY_DATA = [
  {
    key: "province",
    type: "string",
  },
  {
    key: "district",
    type: "string",
  },
  {
    key: "sub-district",
    type: "string",
  },
  {
    key: "detail_location",
    type: "string",
  },
  {
    key: "latitude",
    type: "string",
  },
  {
    key: "longitude",
    type: "string",
  },
  {
    key: "numberNode",
    type: "number",
  },
  {
    key: "numberActiveNode",
    type: "number",
  },
  {
    key: "numberDeactiveNode",
    type: "number"
  }
];

const FIELDS = [
  // {
  //   label: "Tên khu vực",
  //   name: "name",
  // },
  {
    label: "Địa chỉ",
    name: "detail_location",
  },
  {
    label: "Quận",
    name: "district",
  },
  {
    label: "Thành phố",
    name: "province"
  },
  // {
  //   label: "Số node đang hoạt động",
  //   name: "numberActiveNode",
  // },
  // {
  //   label: "Số node dừng hoạt động",
  //   name: "numberDeactiveNode"
  // }, 
  // {
  //   label: "Tổng số node",
  //   name: "numberNode"
  // }
];
