import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NodeService } from 'src/app/services/node.service';
import moment, { max } from "moment";

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
  filter = {
    node_id: "",
    start_date: "",
    end_date: ""
  }
  end_date: any = "";
  check: boolean = false;

  async ngOnInit() {
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
      console.log(88888, data);
      
      this.dataList = data.rows;
      this.totalItems = data.count;
    }).catch(err => {
      this.currentPage = 1;
    });
    console.log(999, this.dataList);
    
    this.spinnerService.hide();
  }

  makeAReport() {
    this.check = true;
    console.log(this.filter);
    if (this.end_date != "") {
      this.filter.end_date = moment(this.end_date).subtract(1, 'hours').format("YYYY-MM-DD HH:mm:ss");
    }
    if (this.filter.node_id != "" && this.filter.start_date != "" && this.filter.end_date != "") {
      this.currentPage = 1;
      this.getDataOfNode(this.filter, this.currentPage, this.sizePage);
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
