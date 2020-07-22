import { Component, OnInit } from '@angular/core'
import { ToastrService } from "ngx-toastr";
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: "app-role",
  templateUrl: "./role.component.html",
  styleUrls: ["./role.component.css"]
})
export class RoleComponent implements OnInit {
  private ROLES: any[]
  private PERMISSIONS: any[]
  private AREAS: any[]

  public currentRole: any = {};

  public selected_permission = "";
  public selected_area = "";


  constructor(private toastrService: ToastrService, private _roleService: RoleService) {}

  async ngOnInit() {
    await this._roleService.getRoles().then((data: any) => this.ROLES = data.data)
    await this._roleService.getActionPermissions().then((data: any) => this.PERMISSIONS = data.data)
    await this._roleService.getAreaPermissions().then((data: any) => this.AREAS = data.data)
  }

  get roles() {
    return this.ROLES
  }

  get fields() {
    return FIELDS
  }

  get key_data() {
    return KEY_DATA
  }

  // get permissions() {
  //   if (!this.PERMISSIONS || !this.PERMISSIONS.length) {
  //     return []
  //   }

  //   const ids = this.currentRole.action_permission.map(v => v.id)

  //   return this.PERMISSIONS.filter((v) => !ids.includes(v.id));
  // }

  // get areas() {
  //   if (!this.AREAS || !this.AREAS.length) {
  //     return []
  //   }

  //   const ids = this.currentRole.area_permission.map(v => v.id)

  //   return this.AREAS.filter((v) => !ids.includes(v.id));
  // }

  // get is_name_valid() {
  //   return this.currentRole.name ? true : false;
  // }

  // get is_permissions_valid() {
  //   return this.currentRole.action_permission.length > 0;
  // }

  is_string(type: string) {
    return type === 'string'
  }

  is_array(type: string) {
    return type === 'array'
  }

  // setModal(role) {
  //   this.currentRole = { ...role }

  //   Object.keys(role).forEach(key => {
  //     if (role[key].length > 0 && typeof(role[key]) !== 'string') {
  //       return this.currentRole[key] = [ ...role[key] ]
  //     }
  //   })
  // }

  // getDatas(role, field) {
  //   const data = []
    
  //   if (!Object.keys(role).includes(field.key)) {
  //     return []
  //   }
    
  //   role[field.key].filter((v, index) => {
  //     if (index < 5) {
  //       data.push(v[field.key_value])
  //     }

  //     if (index === 3) {
  //       data.push('...')
  //     }
  //   })

  //   return data
  // }

  // updateRole() {
  //   if (!this.is_name_valid || !this.is_permissions_valid) {
  //     return this.toastrService.warning("Vui lòng nhập đầy đủ thông tin.");
  //   }
  //   document.getElementById('closeModal').click()
  //   console.log(this.currentRole);
  // }

  // selectPermission() {
  //   this.currentRole.action_permission.push(Number(this.selected_permission));
  //   this.selected_permission = "";
  // }

  // selectArea() {
  //   this.currentRole.area_permission.push(Number(this.selected_area));
  //   this.selected_area = "";
  // }

  // getPermissionName(value) {
  //   if (Object.keys(value).length) {
  //     return value.name
  //   }

  //   const permission = this.PERMISSIONS.find((v) => v.id === value);

  //   if (permission) {
  //     return permission.name;
  //   }

  //   return "Quyền không tên!";
  // }

  // getAreaName(value) {
  //   if (Object.keys(value).length) {
  //     return value.name
  //   }

  //   const area = this.AREAS.find((v) => v.id === value);

  //   if (area) {
  //     return area.name;
  //   }

  //   return "Khu vực không tên!";
  // }

  // removePermission(id) {
  //   this.currentRole.action_permission = this.currentRole.action_permission.filter((v) => v !== id);
  // }

  // removeArea(id) {
  //   this.currentRole.area_permission = this.currentRole.area_permission.filter((v) => v !== id);
  // }
  
}

const KEY_DATA = [
  {
    key: "name",
    type: "string",
  },
  {
    key: "action_permission",
    type: "array",
    key_value: 'name',
    color: "badge-primary",
  },
  {
    key: "area_permission",
    type: "array",
    key_value: 'name',
    color: "badge-info"
  },
];

const FIELDS = [
  {
    label: "Tên vai trò",
  },
  {
    label: "Quyền",
  },
  {
    label: "Khu vực",
  }
];
