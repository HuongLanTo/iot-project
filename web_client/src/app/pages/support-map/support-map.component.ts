import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as L from 'leaflet';

// const provider = new AlgoliaProvider();
// add to leaflet
import { GeoSearchControl, SearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { SensorData, sensorData } from 'src/app/data/sensor_data';
import { DataService } from 'src/app/services/data.service';
import { LocationService } from 'src/app/services/location.service';
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
var supportIcon = L.icon({
  iconUrl: '../../../assets/icon/support.png',
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
  @Output() newItemEvent = new EventEmitter<any>();


  private map;
  locationList: any = [];
  polygon = [];
  latlng = {
    lat: "",
    lon: ""
  }

  constructor(
    private dataService: DataService,
    private locationService: LocationService
  ) { }

  async ngOnInit() {
    this.initMap();
    await this.getLocationList();
    if (this.locationList.length != 0) {
      this.getMarkers();
    }
    
    const provider = new OpenStreetMapProvider();
    var lat: number;
    var lon: number;
    const searchControl = new GeoSearchControl({
      provider: provider,
      showPopup: true,
      marker: {
        icon: iconDefault,
        draggable: false,
      },
      popupFormat: ({ query, result }) => result.label,
      keepResult: true,
    }).addTo(this.map);

    const onMapClick = (e) => {
      this.latlng = {
        lat: e.latlng.lat,
        lon: e.latlng.lng,
      }
      this.newItemEvent.emit(this.latlng)
    }
    this.map.on('click', onMapClick);
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

  async getLocationList() {
    await this.locationService.getLocationListNoFilter().then((data: any) => {
      this.locationList = data.data;
    })
  }

  getMarkers() {
    var markers = [];
    var temp = [];
    for (var i = 0; i < this.locationList.length; i++) {
      temp = [];
      temp.push(this.locationList[i].latitude);
      temp.push(this.locationList[i].longitude);
      temp.push(this.locationList[i].detail_location);
      temp.push(this.locationList[i].sub_district);
      temp.push(this.locationList[i].district);
      temp.push(`<b style="font-size:15px">${this.locationList[i].detail_location}, ${this.locationList[i].sub_district.name}, ${this.locationList[i].district.path}</b>`)
      markers.push(temp);
    }
    //Loop through the markers array
    for (var i = 0; i < markers.length; i++) {
     
      var lon = Number(markers[i][1]);
      var lat = Number(markers[i][0]);
      
      var popupText = String(markers[i][5]);
      
      var markerLocation = new L.LatLng(lat, lon);
      var marker = new L.Marker(markerLocation);
      this.map.addLayer(marker);
   
      marker.bindPopup(popupText);
    }
    
  }

}
