import { Component, OnInit } from "@angular/core";
import { SensorData, sensorData } from "../../data/sensor_data";
import { aqiInfo } from "../../data/aqi";
import * as _ from "lodash";
import Chart from "chart.js";
import moment, { max } from "moment";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "../../variables/charts";
import { ThreeDay, threeDay } from "src/app/data/three_day";
import { DataService } from "src/app/services/data.service";
import { NodeService } from "src/app/services/node.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  sensor_data: any = [];
  current_sensor_data: any = {};
  current_sensor_node_id: "";
  aqi_info = [];                                            
  current_aqi_info: any = {};
  three_day_aqi_info: any = [];
  three_day_aqi_data: any = [];
  lineTypeOfChart = false;
  barTypeOfChart = false;
  co_data = [];
  co2_data = [];
  pm25_data = [];
  time = [];

  activeNode = [];
  activeNodeId = "";

  //filter
  filterDataBy24Hour = {
    node_id: "",
    end_date: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
    start_date: moment(new Date()).subtract(24, 'hours').format("YYYY-MM-DD HH:mm:ss")
  }
  size: number = 24;

  filterDataBy3Day = {
    node_ids: ""
  }

  filterSearch: any = {
    date: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
  }

  // search
  searchingDay = moment(new Date()).subtract(1, 'day').format("YYYY-MM-DD");
  searchingWeek: any;
  searchingMonth: any;
  searchList: any = [];
  searchAqiList: any = [];
  searchNameList: any = [];
  currentDay = moment(new Date()).subtract(1, 'day').format("YYYY-MM-DD");

  

  public sensorChart: any;
  public datasets: any;
  public data: any;
  public Chart: any;

  constructor(
    private dataService: DataService,
    private nodeService: NodeService
  ) {}

  async ngOnInit() {
    this.aqi_info = aqiInfo
    await this.getNodeList();
    parseOptions(Chart, chartOptions());
    await this.getDataByLastHour({node_ids: this.activeNodeId});
    // await this.getDataByLastHour();
    // this.getDataBy24Hour(this.filterDataBy24Hour, this.size);
    if (this.sensor_data!="" && this.sensor_data!=null) {
      await this.getChart();
    }
    await this.searchByDay(this.searchingDay);
  }

  evaluate(aqi) {
    if (aqi >= 0 && aqi <= 50) {
      return "Tốt";
    } else if (aqi >= 51 && aqi <= 100) {
      return "Trung bình";
    } else if (aqi >= 101 && aqi <= 150) {
      return "Kém";
    } else if (aqi >= 151 && aqi <= 200) {
      return "Xấu";
    } else if (aqi >= 201 && aqi <= 300) {
      return "Rất xấu";
    } else {
      return "Nguy hại";
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
    
  }


  async getDataByLastHour(filter) {
    this.dataService.getDataByLastHour(filter)
      .then((data: any) => {
        console.log("data", data);
        
        this.sensor_data = data.data.filter(v => v && v.id);
        console.log('sensor', this.sensor_data);
        
        if (this.sensor_data!="" && this.sensor_data!=null) {
          this.current_sensor_data = this.sensor_data[0];
          this.filterDataBy3Day.node_ids = this.current_sensor_data.node_id;
          this.current_sensor_node_id = this.sensor_data[0].node_id;
          this.selectedNode(this.sensor_data[0].node_id);
        }
      });
  }

  getDataBy24Hour(filter, size) {
    return this.dataService.getDataBy24Hour(filter, size).then((data:any) => {
      return data.rows;
    })
  }

  async getDataBy3Day(filter) {
    var temp: any = [];
    this.three_day_aqi_data = [];
    this.three_day_aqi_info = [];
    await this.dataService.getDataBy3Day(filter).then((data: any) => {
      temp = data.data[0].data;
      for (var i = temp.length - 1; i >= 0; i--) {
        this.three_day_aqi_data.push(temp[i]);
      }
      console.log(2324324, this.three_day_aqi_data);
      
      if (this.three_day_aqi_data.length == 3) {
        this.set3DayAqiInfo(this.three_day_aqi_data[0].aqi, this.three_day_aqi_data[1].aqi, this.three_day_aqi_data[2].aqi);
      }
      
    })
  }

  selectedNode(id) {
    for (var i = 0; i < this.sensor_data.length; i++) {
      if (id == this.sensor_data[i].node_id) {
        this.current_sensor_data = this.sensor_data[i];
      }
    }
    this.filterDataBy3Day.node_ids = this.current_sensor_data.node_id;
    var temp = this.current_sensor_data.aqi;
    this.filterDataBy24Hour.node_id = id;
    this.setCurrentAqiInfo(temp);
    this.getDataBy24Hour(this.filterDataBy24Hour, this.size);
    this.getDataBy3Day(this.filterDataBy3Day);
    this.getChart();
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

  get3DayAqiData() {
    this.three_day_aqi_data = [];
    threeDay.forEach((e) => {
      if (e.nameNode == this.current_sensor_data.nameNode) {
        this.three_day_aqi_data.push(e);
      }
    });
  }

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
                ticks: {
                  max: Math.ceil((10 - Math.max(...this.searchAqiList) % 10) + Math.max(...this.searchAqiList)),
                  min: Math.floor(Math.min(...this.searchAqiList) - Math.min(...this.searchAqiList) % 10),
                  // stepSize: 10
                }
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
          labels: this.searchNameList,
          datasets: [
            {
              label: "AQI",
              data: this.searchAqiList,
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
          labels: this.searchNameList,
          datasets: [
            {
              label: "AQI",
              data: this.searchAqiList,
            },
          ],
        },
      });
    }
  }

  async getChart() {
    const dataBy24Hour = await this.getDataBy24Hour(this.filterDataBy24Hour, this.size);
    // declare chart via id
    var coChart = document.getElementById("co_chart");
    var co2Chart = document.getElementById("co2_chart");
    var pm25Chart = document.getElementById("pm25_chart");
    this.co_data = [];
    this.co2_data = [];
    this.pm25_data = []
    this.time = [];
    console.log(999, this.filterDataBy24Hour);
    
    console.log(999, dataBy24Hour);
    
    
    for (var i = dataBy24Hour.length - 1; i >= 0; i--) {
      this.co_data.push((dataBy24Hour[i].co));
      this.co2_data.push((dataBy24Hour[i].co2));
      this.pm25_data.push((dataBy24Hour[i].pm_25));
      this.time.push(
        moment(dataBy24Hour[i].datetime).format("DD/MM/YYYY HH:mm")
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
                labelString: "CO (µg/m3)",
                display: true,
              },
              ticks: {
                max: Math.ceil((10 - Math.max(...this.co_data) % 10) + Math.max(...this.co_data)),
                min: Math.floor(Math.min(...this.co_data) - Math.min(...this.co_data) % 10),
                // stepSize: 10
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
                labelString: "CO2 (µg/m3)",
                display: true,
              },
              ticks: {
                max: Math.ceil((100 - Math.max(...this.co2_data) % 100) + Math.max(...this.co2_data)),
                min: Math.floor(Math.min(...this.co2_data) - Math.min(...this.co2_data) % 100),
                // stepSize: 10
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
                labelString: "Bụi PM2.5 (µg/m3)",
                display: true,
              },
              ticks: {
                max: Math.ceil((10 - Math.max(...this.pm25_data) % 10) + Math.max(...this.pm25_data)),
                min: Math.floor(Math.min(...this.pm25_data) - Math.min(...this.pm25_data) % 10),
                // stepSize: 10
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
    this.searchNameList = [];
    this.searchAqiList = [];
    this.filterSearch.date = value;
    await this.dataService.getDataOfAllNodeByDay(this.filterSearch).then(data => {
      console.log(555, data);
      
      this.searchList = data;
    });
    
    if (this.searchList.length != 0) {
      this.searchList.forEach(e => {
        this.searchAqiList.push(e.aqi);
        this.searchNameList.push(e.name);
      });
      this.setLineTypeOfChart()
    }
  }
    
}
