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

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'new-user',
        component: NewUserComponent
    },
    {
        path: 'pending-user',
        component: PendingUserComponent
    },
    {
        path: 'node',
        component: NodeComponent
    },
    {
        path: 'new-node',
        component: NewNodeComponent
    },
    {
        path: 'location',
        component: LocationComponent
    }
];
