import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RoleService {
  constructor(
    private http: HttpClient
  ) {}

  protected headers = new HttpHeaders({
    "Content-Type": "application/json",
    Accept: "application/json",
    Cookies: document.cookie,
  });

  private getOptions() {
    return { headers: this.headers };
  }


  private API_URL = environment.apiUrl;

  getActionPermissions(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + '/api/action', this.getOptions())
          .subscribe((res: {responseData: any}) => {
              resolve(res.responseData);
          }, err => {
              reject(err);
          })
    });
  }

  getAreaPermissions(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + '/api/district', this.getOptions())
          .subscribe((res: {responseData: any}) => {
              resolve(res.responseData);
          }, err => {
              reject(err);
          })
    });
  }

  getRoles(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + '/api/role', this.getOptions())
          .subscribe((res: {responseData: any}) => {
              resolve(res.responseData);
          }, err => {
              reject(err);
          })
    });

    // return new Promise((resolve, reject) => {
    //   this.http.get(this.API_URL + "/api/role").subscribe(
    //     (res) => {
    //       var object = JSON.parse((<any>res)._body);
    //       resolve(object);
    //     },
    //     (err) => {
    //       reject(err);
    //     }
    //   );
    // });
  }

  createRole(role: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + "/api/role", role, this.getOptions()).subscribe(
        (res) => {
          resolve(true);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  updateRole(role: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.put(this.API_URL + "/api/role", role, this.getOptions()).subscribe(
        (res) => {
          resolve(true);
        },
        (err) => {
          reject(err);
        }
      );
    });
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