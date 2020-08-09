import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ProfileService } from 'src/app/services/profile.service';

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
      path: 'Quản lý khu vực',
      role: ['Phê duyệt node', 'Tạo mới node'],
      subPath: [
        { path: '/location', title: 'Danh sách', role: ['Phê duyệt node', 'Tạo mới node'], icon: 'ni ni-bullet-list-67' },
        { path: '/new-location', title: 'Tạo mới', role: ['Admin'], icon: 'ni ni-fat-add' }
      ]
    },

    {
      path: 'Quản lý các node',
      role: ['Phê duyệt node', 'Tạo mới node'],
      subPath: [
        { path: '/node', title: 'Danh sách', role: ['Phê duyệt node', 'Tạo mới node'], icon: 'ni ni-bullet-list-67' },
        { path: '/new-node', title: 'Tạo mới', role: ['Tạo mới node'], icon: 'ni ni-fat-add' },
        { path: '/pending-node', title: 'Chờ phê duyệt', role: ['Phê duyệt node'], icon: 'ni ni-check-bold' },
      ]
    },

    {
      path: 'Quản lý người dùng',
      role: ['Phê duyệt user', 'Tạo mới user'],
      subPath: [
        { path: '/user', title: 'Danh sách', role: ['Phê duyệt user', 'Tạo mới user'], icon: 'ni ni-bullet-list-67' },
        { path: '/new-user', title: 'Tạo mới', role: ['Tạo mới user'], icon: 'ni ni-fat-add' },
        { path: '/pending-user', title: 'Chờ phê duyệt', role: ['Phê duyệt user'], icon: 'ni ni-check-bold' },
      ]
    },

    {
      path: 'Quản lý vai trò',
      role: ['Phê duyệt user', 'Tạo mới user'],
      subPath: [
        { path: '/role', title: 'Danh sách', role: ['Phê duyệt user', 'Tạo mới user'], icon: 'ni ni-bullet-list-67' },
        { path: '/create-role', title: 'Tạo mới', role: ['Admin'], icon: 'ni ni-fat-add' },
      ]
    },
    {
      path: 'Quản lý action log',
      role: ['Admin'],
      subPath: [
        { path: '/action-log', title: 'Danh sách', role: ['Admin'], icon: 'ni ni-bullet-list-67' },
      ]
    },
    {
      path: 'Báo cáo',
      role: ['Admin'],
      subPath: [
        { path: '/report', title: 'Báo cáo', role: ['Admin'], icon: 'ni ni-collection' },
      ]
    },
    {
      path: 'Quản lý kết nối',
      role: ['Admin'],
      subPath: [
        { path: '/connect', title: 'Quản lý kết nối', role: ['Admin'], icon: 'ni ni-laptop' },
      ]
    }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  private isAdmin = false;
  private actionName = [];

  constructor(
    private router: Router,
    private profileService: ProfileService
  ) { }

  async ngOnInit() {
    await this.checkAdmin();
    this.menuItems = ROUTES;
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

  async checkAdmin() {
    var user: any = {};
    var actionId = [];
    await this.profileService.getProfile().then((data: any) => {
      user = data;
      actionId = data.role.action_permission;
    })   
    if (user.role.name == "Admin") {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
      await actionId.forEach(e => {
        this.actionName.push(e.name);
      });
    }
    console.log(this.actionName);
    
  }
}
