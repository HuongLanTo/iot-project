import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NodeService } from 'src/app/services/node.service';

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

  sizePage: number = 24;
  currentPage: number = 1;
  totalItems: number;
  nodeList = [];
  dataList = [];
  filter = {
    node_id: "",
    start_date: "",
    end_date: "",
    size: "24"
  }

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

  async getDataOfNode(filter, currentPage) {
    this.spinnerService.show();
    this.currentPage = currentPage;
    await this.dataService.getDataOfNode(filter, currentPage).then((data: any) => {
      this.dataList = data.rows;
      this.totalItems = data.count;
    }).catch(err => {
      this.currentPage = 1;
    });
    console.log(this.dataList);
    
    this.spinnerService.hide();
  }

  makeAReport() {
    this.getDataOfNode(this.filter, this.currentPage);
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
    label: "Đánh giá",
    name: "",
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
