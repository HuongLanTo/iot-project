import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../services/node.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  nodeList: any;
  currentNode = {};
  Status = [
    { status: true, name: 'Active'},
    { status: false, name: 'Deactive'}
  ]

  constructor(
    private nodeService: NodeService
  ) { }

  ngOnInit(): void {
    this.getNodeList();
  }

  getNodeList() {
    this.nodeService.getNodesList().then(data => {
      this.nodeList = data;
    })
  }

}
