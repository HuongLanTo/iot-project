import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { AuthService } from 'src/app/services/auth.service';


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
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getUserList();
  }


  getUserList() {
    this.authService.getUsers().subscribe(data => {
      console.log(data);
      this.userList = data;
    })
  }

}
