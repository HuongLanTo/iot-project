import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-create-role",
  templateUrl: "./create-role.component.html",
  styleUrls: ["./create-role.component.css"],
})
export class CreateRoleComponent implements OnInit {
  public role = {
    name: "",
    action_permission: [1, 5],
    area_permission: [2, 4],
  };

  public selected_permission = "";
  public selected_area = "";

  constructor(private toastrService: ToastrService, private router: Router) {}

  ngOnInit() {}

  get is_name_valid() {
    return this.role.name ? true : false;
  }

  get is_permissions_valid() {
    return this.role.action_permission.length > 0;
  }

  get permissions() {
    return PERMISSIONS.filter(
      (v) => !this.role.action_permission.includes(v.id)
    );
  }

  get areas() {
    return AREAS.filter((v) => !this.role.area_permission.includes(v.id));
  }

  create() {
    if (!this.is_name_valid || !this.is_permissions_valid) {
      return this.toastrService.warning("Vui lòng nhập đầy đủ thông tin.");
    }
    this.router.navigate(["/role"]);
    console.log(this.role);
  }

  selectPermission() {
    this.role.action_permission.push(Number(this.selected_permission));
    this.selected_permission = "";
  }

  selectArea() {
    this.role.area_permission.push(Number(this.selected_area));
    this.selected_area = "";
  }

  getPermissionName(id) {
    const permission = PERMISSIONS.find((v) => v.id === id);

    if (permission) {
      return permission.name;
    }

    return "Quyền không tên!";
  }

  getAreaName(id) {
    const area = AREAS.find((v) => v.id === id);

    if (area) {
      return area.name;
    }

    return "Khu vực không tên!";
  }

  removePermission(id) {
    this.role.action_permission = this.role.action_permission.filter(
      (v) => v !== id
    );
  }

  removeArea(id) {
    this.role.area_permission = this.role.area_permission.filter(
      (v) => v !== id
    );
  }
}

const PERMISSIONS = [
  {
    id: 1,
    name: "quyền 1",
  },
  {
    id: 2,
    name: "quyền 2",
  },
  {
    id: 3,
    name: "quyền 3",
  },
  {
    id: 4,
    name: "quyền 4",
  },
  {
    id: 5,
    name: "quyền 5",
  },
  {
    id: 6,
    name: "quyền 6",
  },
  {
    id: 7,
    name: "quyền 7",
  },
];

const AREAS = [
  {
    id: 1,
    name: "khu vực 1",
  },
  {
    id: 2,
    name: "khu vực 2",
  },
  {
    id: 3,
    name: "khu vực 3",
  },
  {
    id: 4,
    name: "khu vực 4",
  },
  {
    id: 5,
    name: "khu vực 5",
  },
];
