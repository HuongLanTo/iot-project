import { Component, OnInit } from '@angular/core'
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-role",
  templateUrl: "./role.component.html",
  styleUrls: ["./role.component.css"]
})
export class RoleComponent implements OnInit {
  public currentRole: any

  public selected_permission = "";
  public selected_area = "";

  constructor(private toastrService: ToastrService) {
    this.currentRole = {
      id: '',
      name: '',
      action_permission: [],
      area_permission: []
    }
  }

  ngOnInit() {}

  get roles() {
    return FAKE_DATA
  }

  get fields() {
    return FIELDS
  }

  get key_data() {
    return KEY_DATA
  }

  get permissions() {
    const ids = this.currentRole.action_permission.map(v => v.id)

    return PERMISSIONS.filter((v) => !ids.includes(v.id));
  }

  get areas() {
    const ids = this.currentRole.area_permission.map(v => v.id)

    return AREAS.filter((v) => !ids.includes(v.id));
  }

  get is_name_valid() {
    return this.currentRole.name ? true : false;
  }

  get is_permissions_valid() {
    return this.currentRole.action_permission.length > 0;
  }

  is_string(type: string) {
    return type === 'string'
  }

  is_array(type: string) {
    return type === 'array'
  }

  setModal(role) {
    this.currentRole = { ...role }

    Object.keys(role).forEach(key => {
      if (role[key].length > 0 && typeof(role[key]) !== 'string') {
        return this.currentRole[key] = [ ...role[key] ]
      }
    })
  }

  getDatas(role, field) {
    const data = []
    
    if (!Object.keys(role).includes(field.key)) {
      return []
    }
    
    role[field.key].filter((v, index) => {
      if (index < 5) {
        data.push(v[field.key_value])
      }

      if (index === 3) {
        data.push('...')
      }
    })

    return data
  }

  updateRole() {
    if (!this.is_name_valid || !this.is_permissions_valid) {
      return this.toastrService.warning("Vui lòng nhập đầy đủ thông tin.");
    }
    document.getElementById('closeModal').click()
    console.log(this.currentRole);
  }

  selectPermission() {
    this.currentRole.action_permission.push(Number(this.selected_permission));
    this.selected_permission = "";
  }

  selectArea() {
    this.currentRole.area_permission.push(Number(this.selected_area));
    this.selected_area = "";
  }

  getPermissionName(value) {
    if (Object.keys(value).length) {
      return value.name
    }

    const permission = PERMISSIONS.find((v) => v.id === value);

    if (permission) {
      return permission.name;
    }

    return "Quyền không tên!";
  }

  getAreaName(value) {
    if (Object.keys(value).length) {
      return value.name
    }

    const area = AREAS.find((v) => v.id === value);

    if (area) {
      return area.name;
    }

    return "Khu vực không tên!";
  }

  removePermission(id) {
    this.currentRole.action_permission = this.currentRole.action_permission.filter((v) => v !== id);
  }

  removeArea(id) {
    this.currentRole.area_permission = this.currentRole.area_permission.filter((v) => v !== id);
  }
}

const FAKE_DATA = [
  {
    id: 1,
    name: 'Admin',
    action_permission: [
      {
        id: 1,
        name: 'quyền 1'
      },
      {
        id: 2,
        name: 'quyền 2'
      },
      {
        id: 3,
        name: 'quyền 3'
      },
      {
        id: 4,
        name: 'quyền 4'
      },
    ],
    area_permission: [
      {
        id: 1,
        name: 'khu vực 1'
      },
      {
        id: 2,
        name: 'khu vực 2'
      },
      {
        id: 3,
        name: 'khu vực 3'
      },
    ]
  },
  {
    id: 1,
    name: 'Admin 1',
    action_permission: [
      {
        id: 1,
        name: 'quyền 1'
      },
      {
        id: 2,
        name: 'quyền 2'
      },
      {
        id: 3,
        name: 'quyền 3'
      },
      {
        id: 4,
        name: 'quyền 4'
      },
    ],
    area_permission: [
      {
        id: 1,
        name: 'khu vực 1'
      },
      {
        id: 2,
        name: 'khu vực 2'
      },
      {
        id: 3,
        name: 'khu vực 3'
      },
    ]
  },
  {
    id: 1,
    name: 'Admin 2',
    action_permission: [
      {
        id: 1,
        name: 'quyền 1'
      },
      {
        id: 2,
        name: 'quyền 2'
      },
      {
        id: 3,
        name: 'quyền 3'
      },
      {
        id: 4,
        name: 'quyền 4'
      },
    ],
    area_permission: [
      {
        id: 1,
        name: 'khu vực 1'
      },
      {
        id: 2,
        name: 'khu vực 2'
      },
      {
        id: 3,
        name: 'khu vực 3'
      },
    ]
  },
  {
    id: 1,
    name: 'Admin 3',
    action_permission: [
      {
        id: 1,
        name: 'quyền 1'
      },
      {
        id: 2,
        name: 'quyền 2'
      },
      {
        id: 3,
        name: 'quyền 3'
      },
      {
        id: 4,
        name: 'quyền 4'
      },
    ],
    area_permission: [
      {
        id: 1,
        name: 'khu vực 1'
      },
      {
        id: 2,
        name: 'khu vực 2'
      },
      {
        id: 3,
        name: 'khu vực 3'
      },
    ]
  },
]

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
  },
  {
    label: "Lựa chọn"
  }
];

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
