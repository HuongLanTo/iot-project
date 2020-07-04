import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userList: any;
  public filter = {}
  public currentUser={};
  private currentPage: number = 1;
  private show;
  
  constructor(
    private http: Http,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUserList();
  }


  getUserList() {
    this.userService.getUserList().then(data => {
      this.userList = data;
    })
  }

}
