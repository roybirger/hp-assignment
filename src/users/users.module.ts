import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { UsersMainComponent } from './users-main.component'
import { UsersListComponent } from './users-list.component'
import { UsersAddComponent } from './users-add.component'
import { UserDetailComponent } from './user-detail.component'
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service'

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersMainComponent,
    UsersListComponent,
    UsersAddComponent,
    UserDetailComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule {}
