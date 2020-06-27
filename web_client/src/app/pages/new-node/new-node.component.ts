import { Component, OnInit } from '@angular/core';
import { District, district } from 'src/app/data/district';
import { Http } from '@angular/http';
import { NodeService } from 'src/app/services/node.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-node',
  templateUrl: './new-node.component.html',
  styleUrls: ['./new-node.component.css']
})
export class NewNodeComponent implements OnInit {
  public newNode = {
    id: '',
    nameNode: '',
    location: '',
    address: '',
    so2: '',
    no: '',
    buipm25: '',
    temperature: '',
    humidity: '',
    latitude: '',
    longitude: ''
  };
  district: District[] = district;
  
  constructor(
    private http: Http,
    private nodeService: NodeService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.newNode);

  }

  saveNode() {
    this.nodeService.createNode(this.newNode).then(data => {
      this.toastrService.success('Tạo mới node thành công');
      this.router.navigate(['/node']);
    }).catch(err => {
      this.toastrService.warning('Tạo mới node thất bại');
    })
  }

  redirect() {
    this.router.navigate(['/node']);
  }


}
