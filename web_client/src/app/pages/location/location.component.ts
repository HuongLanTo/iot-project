import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locationList: any;
  constructor(
    private locationService: LocationService
  ) { }

  async ngOnInit() {
    await this.getLocationList();
  }

  getLocationList() {
    this.locationService.getLocationList().then(data => {
      this.locationList = data;
    })
  }

}
