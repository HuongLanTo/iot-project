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
  locationList: any = [];
  provinceList: any = [];
  districtList: any = [];
  currentLocation: any = {};
  searchProvince = "";
  searchDistrict = "";

  provinceCode: number;
  searchByProvince = "";
  searchByDistrict = "";
  checkCityCode = false;

  filter = {};
  private currentPage: number = 1;
  private totalItems: number;
  private sizePage = 5;

  constructor(
    private locationService: LocationService,
    private spinnerService: NgxSpinnerService
  ) { }

  async ngOnInit() {
    await this.getLocationList(this.filter, this.currentPage, this.sizePage);
    await this.getProvinceList();
    // await this.getDistrictList();
  }

  get fields() {
    return FIELDS;
  }

  async getLocationList(filter, currentPage, sizePage) {
    this.spinnerService.show();
    this.currentPage = currentPage;
    await this.locationService.getLocationList(filter, currentPage, sizePage).then((data: any) => {
      this.totalItems = data.total;
      this.locationList = data.data;
    })
    this.spinnerService.hide();
  }

  async getProvinceList() {
    await this.locationService.getProvinceList().then(data => {
      this.provinceList = data;
    })
  }

  // async getDistrictList() {
  //   await this.locationService.getDistrictList().then(data => {
  //     this.districtList = data;
  //   })
  // }

  getProvinceCodeAndProvinceId(value) {
    this.checkCityCode = true
    this.provinceCode = value.code;
    this.searchByProvince = value._id;
    
  }

  getDistrictId(value) {
    this.searchByDistrict = value._id;
    
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
    key: "sub_district",
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
    label: "Phường",
    name: "sub_district",
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
