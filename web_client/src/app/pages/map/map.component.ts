import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

// const provider = new AlgoliaProvider();
// add to leaflet
import { GeoSearchControl, SearchControl } from 'leaflet-geosearch';
import { SensorData, sensorData } from 'src/app/data/sensor_data';
import { DataService } from 'src/app/services/data.service';
import { NodeService } from 'src/app/services/node.service';
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
// const icon = L.divIcon({
//   // iconUrl: 'assets/icon/happy.png',
//   iconSize: [0, 0],
//   // iconAnchor:   [22, 94],
//   html: '<div class="container"><img style="margin-left: -30px; margin-top: -20px; width: 35px;" src="assets/marker/Marker1.png"><div><h1 style="color: black; font-size: 18px; margin-left: -24px; margin-top: -34px;">50</h1></div></div>'
// })
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
  activeNode = [];
  activeNodeId = "";

  constructor(
    private dataService: DataService,
    private nodeService: NodeService
  ) { }

  async ngOnInit() {
    this.initMap();
    // var marker = L.marker([20.975986, 105.815191]).addTo(this.map);
    // marker.bindPopup("<b>nameNode1</b><br>AQI:96");
    await this.getNodeList();
    await this.getDataByLastHour({node_ids:this.activeNodeId});
    // await this.getDataByLastHour();
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
    // var location = "Thanh Xuan";
  //   var markers = [
  //     [ -0.1244324, 51.5006728, "Big Ben" ],
  //     [ -0.119623, 51.503308, "London Eye" ],
  //     [ -0.1279688, 51.507728, `<b>${location}</b><table style="width: 100%;"><tbody><td><i class="fa fa-tint fa-2x" aria-hidden="true" style="float:left;margin-right:6px;"><span style="font-size:18px">30</span></i></td><td><i class="fa fa-tint fa-2x" aria-hidden="true" style="float:left;margin-right:6px;"><span>30</span></i></td></tbody></table>`] 
  //  ];
   
    //Loop through the markers array
    // for (var i=0; i<markers.length; i++) {
     
    //   var lon = Number(markers[i][0]);
    //   var lat = Number(markers[i][1]);
    //   var popupText = String(markers[i][2]);
      
    //    var markerLocation = new L.LatLng(lat, lon);
    //    var marker = new L.Marker(markerLocation);
    //    this.map.addLayer(marker);
   
    //    marker.bindPopup(popupText);
    // }
    if (this.sensor_data!="" && this.sensor_data!=null) {
      await this.getMarkers();
    }
    
  }

  async getNodeList() {
    await this.nodeService.getNodeListApprovedFilter({approve: 1, status: 1}).then((data: any) => {
      this.activeNode = data.data;
    });
    this.activeNode.forEach(e => {
      if (this.activeNodeId.length == 0) {
        this.activeNodeId = this.activeNodeId + e._id;
      } else {
        this.activeNodeId = this.activeNodeId + "," + e._id;
      }
    });
    console.log("active", this.activeNodeId);
    
  }

  private initMap() {
    this.map = L.map('map', {
      center: [20.992966, 105.813566],
      zoom: 10
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  async getDataByLastHour(filter) {
    await this.dataService.getDataByLastHour(filter).then(data => {
      console.log(data);
      this.sensor_data = data;
    });
    // await this.setMarker();
  }

  getMarkers() {
    console.log(4324, this.sensor_data);
    
    var markers = [];
    var temp = [];
    for (var i = 0; i < this.sensor_data.length; i++) {
      temp = [];
      temp.push(this.sensor_data[i].lat);
      temp.push(this.sensor_data[i].long);
      temp.push(this.sensor_data[i].aqi);
      temp.push(this.sensor_data[i].tem);
      temp.push(this.sensor_data[i].hum);
      temp.push(this.sensor_data[i].location);
      if (this.sensor_data[i].aqi >= 0 && this.sensor_data[i].aqi <= 50) {
        temp.push("Tốt");
      } else if (this.sensor_data[i].aqi >= 51 && this.sensor_data[i].aqi <= 100) {
        temp.push("Trung bình");
      } else if (this.sensor_data[i].aqi >= 101 && this.sensor_data[i].aqi <= 150) {
        temp.push("Kém");
      } else if (this.sensor_data[i].aqi >= 151 && this.sensor_data[i].aqi <= 200) {
        temp.push("Xấu");
      } else if (this.sensor_data[i].aqi >= 201 && this.sensor_data[i].aqi <= 300) {
        temp.push("Rất xấu");
      } else if (this.sensor_data[i].aqi >= 301) {
        temp.push("Nguy hại");
      };
      temp.push(`<b style="font-size:21px">${this.sensor_data[i].location}</b>
      <br>
      <table>
        <tbody>
          <tr style="text-align:left;">
            <td style="text-align:left; padding-right: 20px;"><span style="font-size:20px">AQI: ${this.sensor_data[i].aqi}</span></td>
            <td style="text-align:left;"><span style="font-size:20px">${temp[6]}</span></td>
          </tr>
          <tr style="text-align:left;">
            <td style="text-align:left; padding-right: 20px;"><i class="fa fa-tint fa-2x" aria-hidden="true" style="float:left;margin-right:6px;"></i><span style="font-size:18px;line-height:24px;">${this.sensor_data[i].tem}&#8451;</span></td>
            <td style="text-align:left;"><i class="fa fa-thermometer-empty fa-2x" aria-hidden="true" style="float:left;margin-right:6px;"></i><span style="font-size:18px;line-height:24px;">${this.sensor_data[i].hum}%</span></td>
          </tr>
        </tbody>
      </table>`)
      markers.push(temp);
    }
    //Loop through the markers array
    for (var i = 0; i < markers.length; i++) {

      // var icon = L.divIcon({
      //   html:'<div class="map-label"><div class="map-label-content"></div><div class="map-label-arrow">Hello</div></div>'
      // });
     
      var lon = Number(markers[i][1]);
      var lat = Number(markers[i][0]);
      
      var popupText = String(markers[i][7]);
      
      var markerLocation = new L.LatLng(lat, lon);
      
      if (markers[i][6] == "Tốt") {
        var icon1 = L.divIcon({
          iconSize: [0, 0],
          html: `<div class="container"><img style="margin-left: -30px; margin-top: -20px; width: 35px;" src="assets/marker/Marker1.png"><div><h1 style="color: black; font-size: 18px; margin-left: -24px; margin-top: -34px;">${markers[i][2]}</h1></div></div>`
        });
        var marker = new L.Marker(markerLocation, {icon: icon1});
      } else if (markers[i][6] == "Trung bình" ) {
        var icon2 = L.divIcon({
          iconSize: [0, 0],
          html: `<div class="container"><img style="margin-left: -30px; margin-top: -20px; width: 35px;" src="assets/marker/Marker2.png"><div><h1 style="color: black; font-size: 18px; margin-left: -24px; margin-top: -34px;">${markers[i][2]}</h1></div></div>`
        });
        var marker = new L.Marker(markerLocation, {icon: icon2});
      } else if (markers[i][6] == "Kém" ) {
        var icon3 = L.divIcon({
          iconSize: [0, 0],
          html: `<div class="container"><img style="margin-left: -30px; margin-top: -20px; width: 35px;" src="assets/marker/Marker3.png"><div><h1 style="color: black; font-size: 18px; margin-left: -24px; margin-top: -34px;">${markers[i][2]}</h1></div></div>`
        });
        var marker = new L.Marker(markerLocation, {icon: icon3});
      } else if (markers[i][6] == "Xấu" ) {
        var icon4 = L.divIcon({
          iconSize: [0, 0],
          html: `<div class="container"><img style="margin-left: -30px; margin-top: -20px; width: 35px;" src="assets/marker/Marker4.png"><div><h1 style="color: black; font-size: 18px; margin-left: -24px; margin-top: -34px;">${markers[i][2]}</h1></div></div>`
        });
        var marker = new L.Marker(markerLocation, {icon: icon4});
      } else if (markers[i][6] == "Rất xấu" ) {
        var icon5 = L.divIcon({
          iconSize: [0, 0],
          html: `<div class="container"><img style="margin-left: -30px; margin-top: -20px; width: 35px;" src="assets/marker/Marker5.png"><div><h1 style="color: black; font-size: 18px; margin-left: -24px; margin-top: -34px;">${markers[i][2]}</h1></div></div>`
        });
        var marker = new L.Marker(markerLocation, {icon: icon5});
      } else if (markers[i][6] == "Nguy hại" ) {
        var icon6 = L.divIcon({
          iconSize: [0, 0],
          html: `<div class="container"><img style="margin-left: -30px; margin-top: -20px; width: 35px;" src="assets/marker/Marker6.png"><div><h1 style="color: black; font-size: 18px; margin-left: -24px; margin-top: -34px;">${markers[i][2]}</h1></div></div>`
        });
        var marker = new L.Marker(markerLocation, {icon: icon6});
      }
      
      this.map.addLayer(marker);
   
      marker.bindPopup(popupText);
    }
    console.log(12, markers);
    
  }

}
