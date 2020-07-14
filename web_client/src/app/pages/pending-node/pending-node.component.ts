import { Component, OnInit } from '@angular/core';
import { NodeService } from 'src/app/services/node.service';

@Component({
  selector: 'app-pending-node',
  templateUrl: './pending-node.component.html',
  styleUrls: ['./pending-node.component.css']
})
export class PendingNodeComponent implements OnInit {
  public nodeList: any;
  currentNode: any = {};

  constructor(
    private nodeService: NodeService
  ) { }

  get key_data() {
    return KEY_DATA;
  }

  get fields() {
    return FIELDS;
  }

  async ngOnInit() {
    await this.getNodeList();
  }

  getNodeList() {
    // this.nodeService.getNodeList().then((data) => {
    //   this.nodeList = data;
    // })
  }

  approve() {
    this.nodeService.approve(this.currentNode.id, {
      approve: 1,
      status: 1
    })
    this.getNodeList();
  }

  disapprove() {
    this.nodeService.disapprove(this.currentNode.id, {
      approve: -1
    })
    this.getNodeList();
  }

}

const KEY_DATA = [
  {
    key: "username",
    type: "string",
  },
  {
    key: "name",
    type: "string",
  },
  {
    key: "role",
    type: "string",
  },
  {
    key: "email",
    type: "string",
  },
];

const FIELDS = [
  {
    label: "Username",
    name: "username",
  },
  {
    label: "Họ và tên",
    name: "name",
  },
  {
    label: "Vai trò",
    name: "role",
  }, 
  {
    label: "Email",
    name: "email"
  }
];
