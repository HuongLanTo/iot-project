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
  private isCreateNode: boolean = false;

  public role = {
    name: "",
    action_permission: [],
    area_permission: [],
  };

  // temp
  private check = true;
  private check_areas = true;
  private name = [];
  private checkCreateNode = -1;

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
    if (this.check == true) {
      return true;
    } else {
      return this.role.action_permission.length > 0;
    }
  }

  get is_areas_valid() {
    return this.check_areas;
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
      this.check = false;
    }
    if (
      this.role.action_permission.includes("5f10c6c8aca322264669cb40") &&
      this.role.area_permission.length == 0
    ) {
      this.check_areas = false;
    }
    if (this.role.action_permission.includes("5f10c6c8aca322264669cb40") && this.role.action_permission.includes("5f10c6dcaca322264669cb41")) {
      this.toastrService.warning("Không được chọn cùng lúc 2 quyền: Tạo mới node và Phê duyệt node");
    }
    if (this.role.action_permission.includes("5ef8878ff768fa241cb226f1") && this.role.action_permission.includes("5f099925b591ba349aa02e33")) {
      this.toastrService.warning("Không được chọn cùng lúc 2 quyền: Tạo mới người dùng và Phê duyệt người dùng");
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
    this.check = false;
    if (this.selected_permission == "5f10c6c8aca322264669cb40") {
      this.isCreateNode = true;
    }
    this.role.action_permission.push(this.selected_permission);
    this.name.push(this.getPermissionName(this.selected_permission));
    if (this.getPermissionName(this.selected_permission) == "Tạo mới node") {
      this.checkCreateNode = this.name.indexOf("Tạo mới node");
    }
    if (this.role.action_permission.length >= 1) {
      this.role.name = "";
      for (var i = 0; i < this.name.length; i++) {
        if (i == 0) {
          this.role.name = this.role.name + this.name[i];
        } else {
          this.role.name = this.role.name + " + " + this.name[i];
        }
      }
    }
    this.selected_permission = "";
  }

  selectArea() {
    this.role.area_permission.push(this.selected_area);
    var index = this.name.indexOf("Tạo mới node");
    if (index > -1) {
      this.name[index] = this.name[index] + " " + this.getAreaName(this.selected_area);
    }
    if (this.role.action_permission.length >= 1) {
      this.role.name = "";
      for (var i = 0; i < this.name.length; i++) {
        if (i == 0) {
          this.role.name = this.role.name + this.name[i];
        } else {
          this.role.name = this.role.name + " + " + this.name[i];
        }
      }
    }
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
      (v) => v !== id
    );
    var index = this.name.indexOf(this.getPermissionName(id));
    if (index > -1) {
      this.name.splice(index, 1);
    }
    if (this.getPermissionName(id) == "Tạo mới node") {
      this.isCreateNode = false;
      this.name.splice(this.checkCreateNode, 1);
      this.checkCreateNode = -1;
    }
    if (this.role.action_permission.length >= 1) {
      this.role.name = "";
      for (var i = 0; i < this.name.length; i++) {
        if (i == 0) {
          this.role.name = this.role.name + this.name[i];
        } else {
          this.role.name = this.role.name + " + " + this.name[i];
        }
      }
    }
  }

  removeArea(id) {
    this.role.area_permission = this.role.area_permission.filter(
      (v) => v !== id
    );
  }
}
