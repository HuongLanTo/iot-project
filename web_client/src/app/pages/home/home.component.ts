import { Component, OnInit } from "@angular/core";
import { SensorData, sensorData } from "../../data/sensor_data";
import { AqiInfo, aqiInfo } from "../../data/aqi";
import * as _ from "lodash";
import Chart from "chart.js";
import Moment, { max } from "moment";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "../../variables/charts";
import { ThreeDay, threeDay } from "src/app/data/three_day";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  sensor_data: any = [];
  current_sensor_data: any = {};
  aqi_info: AqiInfo[] = aqiInfo;                                            
  current_aqi_info: any = {};
  three_day_aqi_info: any = [];
  three_day_aqi_data: any = {};
  lineTypeOfChart = false;
  barTypeOfChart = false;
  co_data: Array<number>;
  co2_data: Array<number>;
  pm25_data: Array<number>;
  time = [];

  //filter
  filterDataBy24Hour = {
    node_id: "1",
    end_date: Moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
    start_date: Moment(new Date()).subtract(24, 'hours').format("YYYY-MM-DD HH:mm:ss")
  }

  filterDataBy3Day = {
    node_ids: ""
  }

  filterSearch: any = {
    date: Moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
  }

  // search
  searchingDay = Moment(new Date()).subtract(1, 'day').format("YYYY-MM-DD");
  searchingWeek: any;
  searchingMonth: any;
  searchList: any = [];
  currentDay = Moment(new Date()).subtract(1, 'day').format("YYYY-MM-DD");

  public sensorChart: any;
  public datasets: any;
  public data: any;
  public Chart: any;

  constructor(
    private dataService: DataService
  ) {}

  async ngOnInit() {
    
    console.log(145);
    parseOptions(Chart, chartOptions());
    
    await this.getDataByLastHour();
    // this.getDataBy24Hour(this.filterDataBy24Hour);
    await this.getChart();
    await this.searchByDay(this.searchingDay);
  }

  getNodeId() {

  }

  async getDataByLastHour() {
    this.dataService.getDataByLastHour()
      .then(data => {
        this.sensor_data = data;
        this.current_sensor_data = data[0];
        this.filterDataBy3Day.node_ids = this.current_sensor_data.node_id;
        this.selectedNode(this.sensor_data[0].node_id);
      });
  }

  getDataBy24Hour(filter) {
    return this.dataService.getDataBy24Hour(filter).then((data:any) => {
      return data.rows;
    })
  }

  async getDataBy3Day(filter) {
    // this.dataService.getDataBy3Day(filter).then(data => {
    //   this.three_day_aqi_data = data[0].data;
    //   this.set3DayAqiInfo(this.three_day_aqi_data[0].aqi, this.three_day_aqi_data[1].aqi, this.three_day_aqi_data[2].aqi);
    // })
  }

  selectedNode(nameNode) {
    for (var i = 0; i < this.sensor_data.length; i++) {
      if (nameNode == this.sensor_data[i].node_id) {
        this.current_sensor_data = this.sensor_data[i];
      }
    }
    this.filterDataBy3Day.node_ids = this.current_sensor_data.node_id;
    var temp = this.current_sensor_data.aqi;
    this.setCurrentAqiInfo(temp);
    this.getDataBy3Day(this.filterDataBy3Day);
    
  }

  setCurrentAqiInfo(temp) {
    if (temp >= 0 && temp <= 50) {
      this.current_aqi_info = this.aqi_info[0];
    } else if (temp >= 51 && temp <= 100) {
      this.current_aqi_info = this.aqi_info[1];
    } else if (temp >= 101 && temp <= 150) {
      this.current_aqi_info = this.aqi_info[2];
    } else if (temp >= 151 && temp <= 200) {
      this.current_aqi_info = this.aqi_info[3];
    } else if (temp >= 201 && temp <= 300) {
      this.current_aqi_info = this.aqi_info[4];
    } else if (temp >= 301) {
      this.current_aqi_info = this.aqi_info[5];
    }
  }

  set3DayAqiInfo(data1, data2, data3) {
    if (data1 >= 0 && data1 <= 50) {
      this.three_day_aqi_info[0] = this.aqi_info[0];
    } else if (data1 >= 51 && data1 <= 100) {
      this.three_day_aqi_info[0] = this.aqi_info[1];
    } else if (data1 >= 101 && data1 <= 150) {
      this.three_day_aqi_info[0] = this.aqi_info[2];
    } else if (data1 >= 151 && data1 <= 200) {
      this.three_day_aqi_info[0] = this.aqi_info[3];
    } else if (data1 >= 201 && data1 <= 300) {
      this.three_day_aqi_info[0] = this.aqi_info[4];
    } else if (data1 >= 301) {
      this.three_day_aqi_info[0] = this.aqi_info[5];
    }

    if (data2 >= 0 && data2 <= 50) {
      this.three_day_aqi_info[1] = this.aqi_info[0];
    } else if (data2 >= 51 && data2 <= 100) {
      this.three_day_aqi_info[1] = this.aqi_info[1];
    } else if (data2 >= 101 && data2 <= 150) {
      this.three_day_aqi_info[1] = this.aqi_info[2];
    } else if (data2 >= 151 && data2 <= 200) {
      this.three_day_aqi_info[1] = this.aqi_info[3];
    } else if (data2 >= 201 && data2 <= 300) {
      this.three_day_aqi_info[1] = this.aqi_info[4];
    } else if (data2 >= 301) {
      this.three_day_aqi_info[1] = this.aqi_info[5];
    }

    if (data3 >= 0 && data3 <= 50) {
      this.three_day_aqi_info[2] = this.aqi_info[0];
    } else if (data3 >= 51 && data3 <= 100) {
      this.three_day_aqi_info[2] = this.aqi_info[1];
    } else if (data3 >= 101 && data3 <= 150) {
      this.three_day_aqi_info[2] = this.aqi_info[2];
    } else if (data3 >= 151 && data3 <= 200) {
      this.three_day_aqi_info[2] = this.aqi_info[3];
    } else if (data3 >= 201 && data3 <= 300) {
      this.three_day_aqi_info[2] = this.aqi_info[4];
    } else if (data3 >= 301) {
      this.three_day_aqi_info[2] = this.aqi_info[5];
    }
  }

  updateData(chart: Chart, data: string[], t: string[]) {
    chart.data.datasets[0].data = data;
    (chart.data.labels = t),
      (chart.options.scales.yAxes[0].scaleLabel.labelString = "CO"),
      chart.update();
  }

  // get3DayAqiData() {
  //   this.three_day_aqi_data = [];
  //   threeDay.forEach((e) => {
  //     if (e.nameNode == this.current_sensor_data.nameNode) {
  //       this.three_day_aqi_data.push(e);
  //     }
  //   });
  // }

  setLineTypeOfChart() {
    this.lineTypeOfChart = true;
    this.barTypeOfChart = false;
    if (this.lineTypeOfChart) {
      var aqiLineChart = document.getElementById("aqi_line_chart");
      var aqiBarChart = document.getElementById("aqi_bar_chart");
      var aqi_line_chart = new Chart(aqiLineChart, {
        type: "line",
        options: {
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  labelString: "AQI",
                  display: true,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  display: false
                },
              },
            ],
          },
        },
        data: {
          labels: this.time,
          datasets: [
            {
              label: "AQI",
              data: this.co_data,
            },
          ],
        },
      });
    }
  }

  setBarTypeOfChart() {
    this.lineTypeOfChart = false;
    this.barTypeOfChart = true;
    if (this.barTypeOfChart) {
      var aqiBarChart = document.getElementById("aqi_bar_chart");
      var aqi_bar_chart = new Chart(aqiBarChart, {
        type: "bar",
        options: {
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  labelString: "AQI",
                  display: true,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  display: false,
                },
              },
            ],
          },
        },
        data: {
          labels: this.time,
          datasets: [
            {
              label: "AQI",
              data: this.co_data,
            },
          ],
        },
      });
    }
  }

  async getChart() {
    const dataBy24Hour = await this.getDataBy24Hour(this.filterDataBy24Hour);
    // declare chart via id
    var coChart = document.getElementById("co_chart");
    var co2Chart = document.getElementById("co2_chart");
    var pm25Chart = document.getElementById("pm25_chart");
    console.log("test", dataBy24Hour);
    
    for (var i = 0; i < dataBy24Hour.length; i++) {
      this.co_data.push(Number(dataBy24Hour[i].co));
      this.co2_data.push(Number(dataBy24Hour[i].co2));
      this.pm25_data.push(Number(dataBy24Hour[i].pm_25));
      this.time.push(
        Moment(dataBy24Hour[i].datetime).format("DD/MM/YYYY HH:mm")
      );
    }

    // var r = Object.assign({}, chartExample1);
    var co_chart = new Chart(coChart, {
      type: "line",
      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              scaleLabel: {
                labelString: "CO",
                display: true,
              },
              ticks: {
                max: 1,
                min: 0,
                stepSize: 5
              }
            },
          ],
        },
      },
      data: {
        labels: this.time,
        datasets: [
          {
            label: "CO",
            data: this.co_data,
          },
        ],
      },
    });
    

    var co2_chart = new Chart(co2Chart, {
      type: "line",
      options: {
        scales: {
          yAxes: [
            {
              scaleLabel: {
                labelString: "CO2",
                display: true,
              },
              ticks: {
                max: 100,
                min: 0,
                stepSize: 10
              }
            },
          ],
        },
      },
      data: {
        labels: this.time,
        datasets: [
          {
            label: "CO2",
            data: this.co2_data,
          },
        ],
      },
    });

    var pm25_chart = new Chart(pm25Chart, {
      type: "line",
      options: {
        scales: {
          yAxes: [
            {
              scaleLabel: {
                labelString: "Bụi PM2.5",
                display: true,
              },
              ticks: {
                max: 100,
                min: 0,
                stepSize: 10
              }
            },
          ],
        },
      },
      data: {
        labels: this.time,
        datasets: [
          {
            label: "Bụi PM2.5",
            data: this.pm25_data,
          },
        ],
      },
    });
  }

  getAqiChart() {
    
  }

  async searchByDay(value) {
    var temp = value;
    this.filterSearch.date = Moment(new Date(temp)).format("YYYY-MM-DD");
    await this.dataService.getDataOfAllNodeByDay(this.filterSearch).then(data => {
      this.searchList = data;
    })
  }
    
}
