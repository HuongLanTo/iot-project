import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from 'src/app/pages/user/user.component';
import { NewUserComponent } from 'src/app/pages/new-user/new-user.component';
import { PendingUserComponent } from 'src/app/pages/pending-user/pending-user.component';
import { NodeComponent } from 'src/app/pages/node/node.component';
import { NewNodeComponent } from 'src/app/pages/new-node/new-node.component';
import { LocationComponent } from 'src/app/pages/location/location.component';
import { NewLocationComponent } from 'src/app/pages/new-location/new-location.component';
import { PaginationComponent } from 'src/app/pages/pagination/pagination.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    UserComponent,
    NewUserComponent,
    PendingUserComponent,
    NodeComponent,
    NewNodeComponent,
    LocationComponent,
    NewLocationComponent,
    PaginationComponent
  ]
})

export class AdminLayoutModule {}
