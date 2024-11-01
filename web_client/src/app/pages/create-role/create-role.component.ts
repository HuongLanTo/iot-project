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
  private area_name = [];
  private checkCreateNode = -1;
  private temp = "";

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
      .then((data: any) => (this.PERMISSIONS = data.data));
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
    var isCreate = true;
    if (!this.is_permissions_valid) {
      this.check = false;
    }
    if (
      this.role.action_permission.includes("5f10c6c8aca322264669cb40") &&
      this.role.area_permission.length == 0
    ) {
      this.check_areas = false;
    }
    if (this.role.action_permission.includes("5f10c6c8aca322264669cb40")) {
      if (this.role.action_permission.includes("5f10c6dcaca322264669cb41")) {
        this.toastrService.warning("Không được chọn cùng lúc 2 quyền: Tạo mới node và Phê duyệt node");
        isCreate = false;
      }
    }
    if (this.role.action_permission.includes("5ef8878ff768fa241cb226f1")) {
      if (this.role.action_permission.includes("5f099925b591ba349aa02e33")) {
        this.toastrService.warning("Không được chọn cùng lúc 2 quyền: Tạo mới người dùng và Phê duyệt người dùng");
        isCreate = false;
      }
    }
    if (this.role.action_permission.includes("5f10c6c8aca322264669cb40")) {
      if (this.role.area_permission.length <= 0) {
        isCreate = false;
      }
    }
    if (this.is_permissions_valid == true && isCreate == true) {
        await this.roles.createRole(this.role).then((data) => {
        this.toastrService.success("Tạo mới vai trò thành công");
        this.router.navigate(["/role"]);
      })
      .catch((err) => {
        this.toastrService.warning("Tạo mới vai trò thất bại");
      });
    }
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
          this.role.name = this.role.name + ", " + this.name[i];
        }
      }
    }
    this.selected_permission = "";
  }

  selectArea() {
    this.role.area_permission.push(this.selected_area);
    this.area_name.push(this.getAreaName(this.selected_area));
    if (this.role.area_permission.length >= 1) {
      this.temp = "";
      for (var i = 0; i < this.area_name.length; i++) {
        if (i == 0) {
          this.temp = this.temp + this.area_name[i];
        } else {
          this.temp = this.temp + " + " + this.area_name[i];
        }
      }
    }
    if (this.checkCreateNode > -1) {
      this.name[this.checkCreateNode] = "Tạo mới node " + this.temp;
    }
    if (this.role.action_permission.length >= 1) {
      this.role.name = "";
      for (var i = 0; i < this.name.length; i++) {
        if (i == 0) {
          this.role.name = this.role.name + this.name[i];
        } else {
          this.role.name = this.role.name + ", " + this.name[i];
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
    const area = this.AREAS.find((v) => v._id === id);

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
      this.role.area_permission = [];
      this.area_name = []
    }
    if (this.role.action_permission.length >= 1) {
      this.role.name = "";
      for (var i = 0; i < this.name.length; i++) {
        if (i == 0) {
          this.role.name = this.role.name + this.name[i];
        } else {
          this.role.name = this.role.name + ", " + this.name[i];
        }
      }
    }
  }

  async removeArea(id) {
    this.role.area_permission = await this.role.area_permission.filter(
      (v) => v !== id
    );
    
    var index = await this.area_name.indexOf(this.getAreaName(id));
    if (index > -1) {
      await this.area_name.splice(index, 1);
    } 
    
    if (this.role.area_permission.length > 0) {
      this.temp = "";
      for (var i = 0; i < this.area_name.length; i++) {
        if (i == 0) {
          this.temp = this.temp + this.area_name[i];
        } else {
          this.temp = this.temp + " + " + this.area_name[i];
        }
      }
    }
    if (this.role.area_permission.length == 0) {
      this.temp = "";
    }
    
    if (this.checkCreateNode > -1) {
      this.name[this.checkCreateNode] = "Tạo mới node " + this.temp;
    }
    
    
    if (this.role.action_permission.length >= 1) {
      this.role.name = "";
      for (var i = 0; i < this.name.length; i++) {
        if (i == 0) {
          this.role.name = this.role.name + this.name[i];
        } else {
          this.role.name = this.role.name + ", " + this.name[i];
        }
      }
    }
    
  }
}
