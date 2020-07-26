import { Component, OnInit, SimpleChange } from '@angular/core';
import * as L from 'leaflet';
const provider = new OpenStreetMapProvider();
import * as GeoSearch from 'leaflet-geosearch';

// const provider = new AlgoliaProvider();
// add to leaflet
import { GeoSearchControl, SearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
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
var greenIcon = L.icon({
  iconUrl: '../../../assets/icon/happy.png',
  // shadowUrl: 'leaf-shadow.png',

  iconSize:     [38, 95], // size of the icon
  // shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
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
  selector: 'app-support-map',
  templateUrl: './support-map.component.html',
  styleUrls: ['./support-map.component.scss']
})
export class SupportMapComponent implements OnInit {

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
    this.getDataByLastHour();
    // this.getMarkers();
    // var searchControl = L.esri.Geocoding.geosearch().addTo(this.map);

    // var results = L.layerGroup().addTo(this.map);

    // searchControl.on('results', function (data) {
    //   results.clearLayers();
    //   for (var i = data.results.length - 1; i >= 0; i--) {
    //     results.addLayer(L.marker(data.results[i].latlng));
    //   }
    // });
    // this.map.addControl(
    //   new GeoSearchControl({
    //     provider,
    //   }),
    // );
    const provider = new OpenStreetMapProvider();
 
    const searchControl = new GeoSearchControl({
      provider: provider,
      marker: {
        icon: iconDefault,
        draggable: false,
      }
    }).addTo(this.map);
    console.log(searchControl);
    
  }
   
  private initMap() {
    this.map = L.map('map', {
      center: [20.992966, 105.813566],
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

  // getMarkers() {
  //   var markers = [];
  //   var temp = [];
  //   for (var i = 0; i < this.sensor_data.length; i++) {
  //     temp = [];
  //     temp.push(this.sensor_data[i].lat);
  //     temp.push(this.sensor_data[i].long);
  //     temp.push(this.sensor_data[i].aqi);
  //     temp.push(this.sensor_data[i].tem);
  //     temp.push(this.sensor_data[i].hum);
  //     temp.push(this.sensor_data[i].location);
  //     temp.push(`<b style="font-size:21px">${this.sensor_data[i].location}</b>
  //     <br>
  //     <table>
  //       <tbody>
  //         <tr style="text-align:left;">
  //           <td style="text-align:left; padding-right: 20px;"><span style="font-size:20px">AQI: ${this.sensor_data[i].aqi}</span></td>
  //           <td style="text-align:left;"><span style="font-size:20px">Tốt</span></td>
  //         </tr>
  //         <tr style="text-align:left;">
  //           <td style="text-align:left; padding-right: 20px;"><i class="fa fa-tint fa-2x" aria-hidden="true" style="float:left;margin-right:6px;"></i><span style="font-size:18px;line-height:24px;">${this.sensor_data[i].tem}&#8451;</span></td>
  //           <td style="text-align:left;"><i class="fa fa-thermometer-empty fa-2x" aria-hidden="true" style="float:left;margin-right:6px;"></i><span style="font-size:18px;line-height:24px;">${this.sensor_data[i].hum}%</span></td>
  //         </tr>
  //       </tbody>
  //     </table>`)
  //     markers.push(temp);
  //   }
  //   //Loop through the markers array
  //   for (var i = 0; i < markers.length; i++) {
     
  //     var lon = Number(markers[i][1]);
  //     var lat = Number(markers[i][0]);
      
  //     var popupText = String(markers[i][6]);
      
  //     var markerLocation = new L.LatLng(lat, lon);
  //     var marker = new L.Marker(markerLocation);
  //     this.map.addLayer(marker);
   
  //     marker.bindPopup(popupText);
  //   }
  //   console.log(12, markers);
    
  // }

}
