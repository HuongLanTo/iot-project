import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../services/node.service';
import { ToastrService } from 'ngx-toastr';
import { stringify } from 'querystring';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  nodeList: any;
  nodeListFull: any;
  currentNode: any = {};
  Status = [
    { status: true, name: 'Active'},
    { status: false, name: 'Deactive'}
  ]

  //search
  searchNodename = '';
  searchLocation = '';
  searchAddress = '';
  searchStatus = '';

  constructor(
    private nodeService: NodeService,
    private toastrService: ToastrService
  ) { }

  async ngOnInit() {
    await this.getNodeList();
  }

  getNodeList() {
    this.nodeService.getNodesList().then(data => {
      this.nodeListFull = data;
      this.nodeList = this.nodeListFull
    })
  }

  updateNodeInfo() {
    console.log(this.currentNode);
    console.log(typeof(this.currentNode));
    console.log(typeof(this.nodeList));
    console.log(typeof(this.nodeList[0]));
    
    console.log(this.currentNode.id);
    this.nodeService.updateNodeInfo(this.currentNode.id, {
      so2: this.currentNode.so2,
      no: this.currentNode.no,
      buipm25: this.currentNode.buipm25,
      temperature: this.currentNode.temperature,
      humidity: this.currentNode.humidity,
      status: this.currentNode.status,
    }).then(data => {
      this.toastrService.success('Cập nhật thông tin node thành công');
    }).catch(err => {
      this.toastrService.warning('Cập nhật thông tin node thất bại');
    })
  }

  getNodeListFromNodename() {
    var tempList = [];
    if (this.searchNodename === '') {
      this.nodeList = this.nodeListFull
    } else {
      this.nodeListFull.forEach(e => {
        if (e.nameNode.includes(this.searchNodename)) {
          tempList.push(e);
        }
      });
      this.nodeList = tempList;
    }
    
  }

}