import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

// const provider = new AlgoliaProvider();
// add to leaflet
import { GeoSearchControl, SearchControl } from 'leaflet-geosearch';
import { SensorData, sensorData } from 'src/app/data/sensor_data';
import { DataService } from 'src/app/services/data.service';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
// const iconRetinaUrl = '../../../assets/icon/happy.png';
// const iconUrl = '../../../assets/icon/happy.png';
// const shadowUrl = '../../../assets/icon/happy.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;
interface result {
  x: number; // lon
  y: number; // lat
  label: string; // formatted address
  bounds: [
    [number, number], // south, west - lat, lon
    [number, number], // north, east - lat, lon
  ];
  raw: any; // raw provider result
};

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private map;
  sensor_data: any;
  polygon = [];

  constructor(
    private dataService: DataService
  ) { }

  async ngOnInit() {
    this.initMap();
    // var marker = L.marker([20.975986, 105.815191]).addTo(this.map);
    // marker.bindPopup("<b>nameNode1</b><br>AQI:96");
    await this.getDataByLastHour();
    // this.sensor_data.forEach(e => {
    //   this.polygon.push([Number(e.long), Number(e.lat)]);
    // });
    // console.log(145, this.sensor_data);
    // console.log();
    //     console.log(this.polygon);
        
    // for (var i = 0; i < this.polygon.length; i++) {
    //   var markerLocation = new L.LatLng(this.polygon[i][0], this.polygon[i][1]);
    //   var marker = new L.Marker(markerLocation);
    //   this.map.addLayer(marker);
    // }
    var location = "Thanh Xuan";
    var markers = [
      [ -0.1244324, 51.5006728, "Big Ben" ],
      [ -0.119623, 51.503308, "London Eye" ],
      [ -0.1279688, 51.507728, `<b>${location}</b><table style="width: 100%;"><tbody><td><i class="fa fa-tint fa-2x" aria-hidden="true" style="float:left;margin-right:6px;"><span style="font-size:18px">30</span></i></td><td><i class="fa fa-tint fa-2x" aria-hidden="true" style="float:left;margin-right:6px;"><span>30</span></i></td></tbody></table>`] 
   ];
   
   //Loop through the markers array
    for (var i=0; i<markers.length; i++) {
     
      var lon = Number(markers[i][0]);
      var lat = Number(markers[i][1]);
      var popupText = String(markers[i][2]);
      
       var markerLocation = new L.LatLng(lat, lon);
       var marker = new L.Marker(markerLocation);
       this.map.addLayer(marker);
   
       marker.bindPopup(popupText);
   
    }
  }

  private initMap() {
    this.map = L.map('map', {
      center: [51.5056,-0.1213],
      zoom: 15
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  async getDataByLastHour() {
    await this.dataService.getDataByLastHour().then(data => {
      console.log(data);
      this.sensor_data = data;
    });
    // await this.setMarker();
  }

  // setMarker() {
  //   console.log(56465348756453);
    
  //   var polygon: any = [];
  //   this.sensor_data.forEach(e => {
  //     polygon.push([Number(e.long), Number(e.lat)]);
  //   });
  //   for (var i = 0; i < polygon.length; i++) {
  //     var markerLocation = new L.LatLng(polygon[i].lat, polygon[i].long);
  //     var marker = new L.Marker(markerLocation);
  //     this.map.addLayer(marker);
  //   }
  // }

}
