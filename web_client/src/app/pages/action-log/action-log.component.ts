import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-action-log',
  templateUrl: './action-log.component.html',
  styleUrls: ['./action-log.component.css']
})
export class ActionLogComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    console.log(this.auth.checkSession());
    
  }

}
