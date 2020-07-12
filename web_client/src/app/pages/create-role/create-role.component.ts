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
  private PERMISSIONS: any[]
  private AREAS: any[]

  public role = {
    name: "",
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
    await this.roles.getActionPermissions().then(data => this.PERMISSIONS = data)
    await this.roles.getAreaPermissions().then(data => this.AREAS = data)
  }

  get is_name_valid() {
    return this.role.name ? true : false;
  }

  get is_permissions_valid() {
    return this.role.action_permission.length > 0;
  }

  get permissions() {
    if (!this.PERMISSIONS || !this.PERMISSIONS.length) {
      return []
    }

    return this.PERMISSIONS.filter(
      (v) => !this.role.action_permission.includes(v.id)
    );
  }

  get areas() {
    if (!this.AREAS || !this.AREAS.length) {
      return []
    }

    return this.AREAS.filter((v) => !this.role.area_permission.includes(v.id));
  }

  async create() {
    if (!this.is_name_valid || !this.is_permissions_valid) {
      return this.toastrService.warning("Vui lòng nhập đầy đủ thông tin.");
    }

    // await this.roles.createRole(this.role).then(result => {
    //   if (result && result.error) {
    //     return
    //   }
    // })
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
    const permission = this.PERMISSIONS.find((v) => v.id === id);

    if (permission) {
      return permission.name;
    }

    return "Quyền không tên!";
  }

  getAreaName(id) {
    const area = this.AREAS.find((v) => v.id === id);

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
