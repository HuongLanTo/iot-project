import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UserComponent } from 'src/app/pages/user/user.component';
import { NewUserComponent } from 'src/app/pages/new-user/new-user.component';
import { PendingUserComponent } from 'src/app/pages/pending-user/pending-user.component';
import { NodeComponent } from 'src/app/pages/node/node.component';
import { NewNodeComponent } from 'src/app/pages/new-node/new-node.component';
import { LocationComponent } from 'src/app/pages/location/location.component';
import { NewLocationComponent } from 'src/app/pages/new-location/new-location.component';
import { LocationService } from 'src/app/services/location.service';
import { PendingNodeComponent } from 'src/app/pages/pending-node/pending-node.component';
import { CreateRoleComponent } from '../../pages/create-role/create-role.component'
import { RoleComponent } from '../../pages/role/role.component'
import { ActionLogComponent } from 'src/app/pages/action-log/action-log.component';
import { AuthorizationGuard } from 'src/app/guards/authorization.guard';


export const AdminLayoutRoutes: Routes = [
    // // { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'tables',         component: TablesComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthorizationGuard],
        data: {
            allowedRoles: []
        }
    },
    {
        path: 'new-user',
        component: NewUserComponent,
        canActivate: [AuthorizationGuard],
        data: {
            allowedRoles: ['Tạo mới user']
        }

    },
    {
        path: 'pending-user',
        component: PendingUserComponent,
        canActivate: [AuthorizationGuard],
        data: {
            allowedRoles: ['Phê duyệt user']
        }
    },
    {
        path: 'node',
        component: NodeComponent,
        canActivate: [AuthorizationGuard],
        data: {
            allowedRoles: []
        }
    },
    {
        path: 'new-node',
        component: NewNodeComponent,
        canActivate: [AuthorizationGuard],
        data: {
            allowedRoles: ['Tạo mới node']
        }
    },
    {
        path: 'create-role',
        component: CreateRoleComponent,
        canActivate: [AuthorizationGuard],
        data: {
            allowedRoles: ['Admin']
        }
    },
    {
        path: 'role',
        component: RoleComponent,
        canActivate: [AuthorizationGuard],
        data: {
            allowedRoles: []
        }
    },
    {
        path: 'location',
        component: LocationComponent,
        canActivate: [AuthorizationGuard],
        data: {
            allowedRoles: []
        }
    },
    {
        path: 'new-location',
        component: NewLocationComponent,
        canActivate: [AuthorizationGuard],
        data: {
            allowedRoles: ['Tạo mới node']
        }
    },
    {
        path: 'pending-node',
        component: PendingNodeComponent,
        canActivate: [AuthorizationGuard],
        data: {
            allowedRoles: ['Phê duyệt node']
        }
    },
    {
        path: 'action-log',
        component: ActionLogComponent,
        canActivate: [AuthorizationGuard],
        data: {
            allowedRoles: ['Admin']
        }
    }
];
