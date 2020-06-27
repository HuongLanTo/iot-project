import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../services/node.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  nodeList: string[];

  constructor(
    private nodeService: NodeService
  ) { }

  ngOnInit(): void {
    this.getNodeList();
  }

  getNodeList() {
    this.nodeService.getNodes().subscribe(data => {
      console.log(data);
      this.nodeList = data;
    })
  }

}
