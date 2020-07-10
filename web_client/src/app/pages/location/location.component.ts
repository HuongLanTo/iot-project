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
  district: District[] = district_data;
  currentLocation: any = {};
  constructor(
    private locationService: LocationService
  ) { }

  async ngOnInit() {
    await this.getLocationList();
  }

  get fields() {
    return FIELDS;
  }

  getLocationList() {
    this.locationService.getLocationList().then(data => {
      this.locationList = data;
    })
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
