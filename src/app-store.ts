import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { users } from './users/users-reducer'
import { user } from './users/user-reducer'

@NgModule({
    imports: [StoreModule.provideStore({users, user})]
})
export class AppStoreModule {
}