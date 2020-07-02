import { Component, OnInit, ElementRef } from "@angular/core";
import { ROUTES } from "../sidebar/sidebar.component";
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from "@angular/common";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { ProfileService } from "src/app/services/profile.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;

  public currentUser = {};

  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private authService: AuthService,
    private profileService: ProfileService
  ) {
    this.location = location;
  }

  async ngOnInit() {
    console.log(123);
    
    this.listTitles = ROUTES.filter((listTitle) => listTitle);
    console.log(this.currentUser);
    
    await this.profileService.getProfile().then(data => {
      this.currentUser = data;
      console.log(this.currentUser);
      
    })
    
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return "Dashboard";
  }

  logout() {
    this.authService.logout();
  }

  // getCurrentUser() {
  //   this.authService.getCurrentUser().then(data => {
  //     this.currentUser = data;
  //   })
  // }
}
