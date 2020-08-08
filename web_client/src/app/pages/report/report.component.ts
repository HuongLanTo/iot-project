import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NodeService } from 'src/app/services/node.service';
import Chart from "chart.js";
import moment from "moment";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "../../variables/charts";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private nodeService: NodeService,
    private spinnerService: NgxSpinnerService
  ) { }

  sizePage: number = 20;
  currentPage: number = 1;
  totalItems: number;
  nodeList: any = [];
  dataList: any = [];
  dayList: any = [];
  aqiList: any = [];
  backgroundColor: any = [];
  percentageList: any = [];
  tableList: any = []
  filter = {
    node_id: "",
    start_date: "",
    end_date: ""
  }
  end_date: any = "";
  currentNode: any = "";
  check: boolean = false;
  isShowingTable = true;

  async ngOnInit() {
    parseOptions(Chart, chartOptions());
    await this.getNodeList();
    console.log(this.dataList);
    
  }

  get fields() {
    return FIELDS;
  }

  async getNodeList() {
    this.nodeService.getNodeListApprovedFilter({approve: 1}).then((data: any) => {
      this.nodeList = data.data;
    })
  }

  async getDataOfNode(filter, currentPage, sizePage) {
    this.spinnerService.show();
    this.currentPage = currentPage;
    await this.dataService.getDataOfNode(filter, currentPage, sizePage).then((data: any) => {
      this.dataList = data.rows;
      this.totalItems = data.count;
    }).catch(err => {
      this.currentPage = 1;
    });
    this.spinnerService.hide();
  }

  async getChart() {
    var tempList = [];
    this.aqiList = [];
    this.dayList = [];
    this.percentageList = [0, 0, 0, 0, 0, 0];
    this.backgroundColor = [];
    await this.dataService.getDataOfNode(this.filter, 1, this.totalItems).then((data: any) => {
      tempList = data.rows;
    })
    tempList.forEach(e => {
      this.dayList.push(moment(e.datetime).format("DD/MM/YYYY HH:mm"));
      this.aqiList.push(e.aqi);
      if (e.aqi >= 0 && e.aqi <= 50) {
        this.backgroundColor.push("#57F83B");
        this.percentageList[0]++;
      } else if (e.aqi >= 51 && e.aqi <= 100) {
        this.backgroundColor.push("#F8D82E");
        this.percentageList[1]++;
      } else if (e.aqi >= 101 && e.aqi <= 150) {
        this.backgroundColor.push("#F1923D");
        this.percentageList[2]++;
      } else if (e.aqi >= 151 && e.aqi <= 200) {
        this.backgroundColor.push("#FF3232");
        this.percentageList[3]++;
      } else if (e.aqi >= 201 && e.aqi <= 300) {
        this.backgroundColor.push("#CC3399");
        this.percentageList[4]++;
      } else if (e.aqi >= 301) {
        this.backgroundColor.push("#A52A2A");
        this.percentageList[5]++;
      }
    });
    console.log("date", this.dayList);
    console.log("date", this.aqiList);
    console.log("date", this.backgroundColor);
    console.log("pie", this.percentageList);
    console.log("pie", this.percentageList);
    
    // create chart
    var aqiBarChart = document.getElementById("aqi_bar_chart");
    var aqiPieChart = document.getElementById("aqi_pie_chart");
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
        labels: this.dayList,
        datasets: [
          {
            label: "AQI",
            data: this.aqiList,
            backgroundColor: this.backgroundColor
          },
        ],
      },
    });

    var aqi_pie_chart = new Chart(aqiPieChart, {
      type: "pie",
      options: {
        title: {
          display: true,
          position: top
        },
        legend: {
          display: true,
          labels: ["Tốt", "Trung bình", "Kém", "Xấu", "Rất xấu", "Nguy hại"]
        }
      },
      data: {
        labels: ["Tốt", "Trung bình", "Kém", "Xấu", "Rất xấu", "Nguy hại"],
        datasets: [
          {
            fill: true,
            label: "AQI",
            backgroundColor: ["#57F83B","#F8D82E", "#F1923D", "#FF3232", "#CC3399", "#A52A2A"],
            borderWidth: [0, 0, 0, 0, 0, 0],
            data: this.percentageList
          },
        ],
      },
    });
  }

  async makeAReport() {
    this.check = true;
    console.log(this.filter);
    if (this.currentNode != {}) {
      this.filter.node_id = this.currentNode._id;
    }
    if (this.end_date != "") {
      this.filter.end_date = moment(this.end_date).add(23, 'hours').format("YYYY-MM-DD HH:mm:ss");
    }
    if (this.filter.node_id != "" && this.filter.start_date != "" && this.filter.end_date != "") {
      this.currentPage = 1;
      await this.getDataOfNode(this.filter, this.currentPage, this.sizePage);
      await this.getDate();
      await this.getChart();
    }
  }

  getDate() {
    var name = this.currentNode.name;
    var start = moment(this.filter.start_date).format("DD/MM/YYYY");
    var end = moment(this.end_date).format("DD/MM/YYYY");
    if (this.filter.start_date == this.end_date) {
      return `Báo cáo thông số các cảm biến và chỉ số chất lượng không khí tại ${name} trong ngày ${start} `;
    } else {
      return `Báo cáo thông số các cảm biến và chỉ số chất lượng không khí tại ${name} từ ${start} đến ${end} `;
    }
    
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

}

const FIELDS = [
  {
    label: "Thời gian",
    name: "datetime",
  },
  {
    label: "Chỉ số AQI",
    name: "aqi",
  },
  {
    label: "Nhiệt độ",
    name: "tem",
  },
  {
    label: "Độ ẩm",
    name: "hum"
  },
  {
    label: "Khí CO",
    name: "co"
  },
  {
    label: "Khí CO2",
    name: "co2"
  },
  {
    label: "Bụi PM2.5",
    name: "pm_25"
  }
];
