import { Component, OnInit } from '@angular/core'

@Component({
  selector: "app-role",
  templateUrl: "./role.component.html",
  styleUrls: ["./role.component.css"]
})
export class RoleComponent implements OnInit {
  public currentRole: any = {}

  constructor() {}

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

  is_string(type: string) {
    return type === 'string'
  }

  is_array(type: string) {
    return type === 'array'
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
}

const FAKE_DATA = [
  {
    id: 1,
    name: 'Admin',
    permissions: [
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
    areas: [
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
    permissions: [
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
    areas: [
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
    permissions: [
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
    areas: [
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
    permissions: [
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
    areas: [
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
    key: "permissions",
    type: "array",
    key_value: 'name',
    color: "badge-primary",
  },
  {
    key: "areas",
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