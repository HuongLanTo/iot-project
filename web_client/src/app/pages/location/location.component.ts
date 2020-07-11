import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { District, district_data } from 'src/app/data/district';

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
    private locationService: LocationService
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
    this.locationService.getLocationList().then(data => {
      this.locationList = data;
    })
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
    key: "detail",
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
  {
    label: "Tên khu vực",
    name: "location",
  },
  {
    label: "Quận",
    name: "district",
  },
  {
    label: "Thành phố",
    name: "province"
  },
  {
    label: "Số node đang hoạt động",
    name: "numberActiveNode",
  },
  {
    label: "Số node dừng hoạt động",
    name: "numberDeactiveNode"
  }, 
  {
    label: "Tổng số node",
    name: "numberNode"
  }
];
