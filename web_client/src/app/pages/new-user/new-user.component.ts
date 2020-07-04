import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { district, District } from 'src/app/data/district';
import { Role, role } from 'src/app/models/role';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  private checkCreateNodeRole = false;
  private checkEditNodeRole = false;
  private role: Role[] = role;
  isAdminChecked: boolean = false;
  isCreateUserChecked: boolean = false;
  isEditUserChecked: boolean = false;
  isApproveUserChecked: boolean = false;
  isCreateNodeChecked: boolean = false;
  isEditNodeChecked: boolean = false;
  district: District[] = district;
  
  constructor() { }

  ngOnInit() {
  }

  checkValue(event: any) {
    console.log(event);
  }

}
