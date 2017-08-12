import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersMainComponent } from './users-main.component'
import { UsersAddComponent } from './users-add.component'
import { UserDetailComponent } from './user-detail.component'

const usersRoutes: Routes = [
  { path: 'users',      component: UsersMainComponent },
  { path: 'users/add',  component: UsersAddComponent },
  { path: 'users/:id',  component: UserDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }