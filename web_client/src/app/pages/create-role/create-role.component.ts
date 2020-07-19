import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { RoleService } from "src/app/services/role.service";

@Component({
  selector: "app-create-role",
  templateUrl: "./create-role.component.html",
  styleUrls: ["./create-role.component.css"],
})
export class CreateRoleComponent implements OnInit {
  private PERMISSIONS: any[];
  private AREAS: any[];
  isAdminChecked = false;
  isModeratorChecked = false;

  public role = {
    name: "Role for B",
    action_permission: [],
    area_permission: [],
  };

  public selected_permission = "";
  public selected_area = "";

  constructor(
    private toastrService: ToastrService,
    private router: Router,
    private roles: RoleService
  ) {}

  async ngOnInit() {
    await this.roles
      .getActionPermissions()
      .then((data) => (this.PERMISSIONS = data));
    await this.roles.getAreaPermissions().then((data) => (this.AREAS = data));
  }

  get is_permissions_valid() {
    return this.role.action_permission.length > 0;
  }

  get permissions() {
    if (!this.PERMISSIONS || !this.PERMISSIONS.length) {
      return [];
    }

    return this.PERMISSIONS.filter(
      (v) => !this.role.action_permission.includes(v._id)
    );
  }

  get areas() {
    if (!this.AREAS || !this.AREAS.length) {
      return [];
    }

    return this.AREAS.filter((v) => !this.role.area_permission.includes(v._id));
  }

  async create() {
    if (!this.is_permissions_valid) {
      return this.toastrService.warning("Vui lòng nhập đầy đủ thông tin");
    }
    if (
      this.role.action_permission.includes("5f10c6c8aca322264669cb40") &&
      this.role.area_permission.length == 0
    ) {
      return this.toastrService.warning("Quyền Tạo mới node cần chọn khu vực");
    }
    await this.roles.createRole(this.role).then((data) => {
      this.toastrService.success("Tạo mới vai trò thành công");
      this.router.navigate(["/role"]);
    })
    .catch((err) => {
      this.toastrService.warning("Tạo mới vai trò thất bại");
    });
  }

  selectPermission() {
    this.role.action_permission.push(this.selected_permission);
    this.selected_permission = "";
  }

  selectArea() {
    console.log(this.role.area_permission);

    this.role.area_permission.push(this.selected_area);
    this.selected_area = "";
  }

  getPermissionName(id) {
    const permission = this.PERMISSIONS.find((v) => v._id === id);
    if (permission) {
      return permission.name;
    }

    return "Quyền không tên!";
  }

  getAreaName(id) {
    const area = this.AREAS.find((v) => v._id == id);

    if (area) {
      return area.name;
    }

    return "Khu vực không tên!";
  }

  removePermission(id) {
    this.role.action_permission = this.role.action_permission.filter(
      (v) => v._id !== id
    );
  }

  removeArea(id) {
    this.role.area_permission = this.role.area_permission.filter(
      (v) => v._id !== id
    );
  }
}
