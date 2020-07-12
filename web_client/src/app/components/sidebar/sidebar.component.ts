import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface SubPath {
    path: string;
    title: string;
    icon: string;
    role: string[];
}

declare interface RouteInfo {
    path: string;
    subPath: SubPath[];
    role: string[]
}
export const ROUTES: RouteInfo[] = [
    // { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    // { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    // { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    // { path: '/user', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
    // {
    //   path: 'Quản lý khu vực',
    //   role: ['admin'],
    //   subPath: [
    //     { path: '/location', title: 'Danh sách', role: ['admin'], icon: 'ni ni-bullet-list-67' },
    //     { path: '/new-location', title: 'Tạo mới', role: ['admin'], icon: 'ni ni-fat-add' },
    //   ]
    // },

    {
      path: 'Quản lý các node',
      role: ['admin', 'moderator'],
      subPath: [
        { path: '/node', title: 'Danh sách', role: ['admin', 'moderator'], icon: 'ni ni-bullet-list-67' },
        { path: '/new-node', title: 'Tạo mới', role: ['admin', 'moderator'], icon: 'ni ni-fat-add' },
      ]
    },

    {
      path: 'Quản lý người dùng',
      role: ['admin'],
      subPath: [
        { path: '/user', title: 'Danh sách', role: ['admin'], icon: 'ni ni-bullet-list-67' },
        { path: '/new-user', title: 'Tạo mới', role: ['admin'], icon: 'ni ni-fat-add' },
        { path: '/pending-user', title: 'Chờ phê duyệt', role: ['admin'], icon: 'ni ni-fat-add' },
      ]
    },

    {
      path: 'Quản lý vai trò',
      role: ['admin'],
      subPath: [
        { path: '/role', title: 'Danh sách', role: ['admin'], icon: 'ni ni-bullet-list-67' },
        { path: '/create-role', title: 'Tạo mới', role: ['admin'], icon: 'ni ni-fat-add' },
      ]
    },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES;
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
