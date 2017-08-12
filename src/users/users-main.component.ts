import { Component }        from '@angular/core'
import { Observable }       from 'rxjs/Observable'
import { Subject }          from 'rxjs/Subject'
import { Store }            from '@ngrx/store'
import { Router }           from '@angular/router';

import { UsersService } from './users.service'

import 'rxjs/add/operator/map'
import 'rxjs/add/observable/merge'

import { SEARCH_USER, CLEAN_FILTERS } from './users-reducer'


@Component({
    selector: 'users-main',
    template: `
                <input #inputUserSearch type="text" placeholder="Enter name">
                <button #search (click)="search$.next(inputUserSearch.value)">Search</button>
                <button (click)="addUserClick()">Add User</button>
                <users-list [users]="users"></users-list>       
                `
})
export class UsersMainComponent {
    
    search$ = new Subject()
        .map((value: string) => ({type: SEARCH_USER, payload: value}))

    users;

    constructor(store: Store<any>, private usersService: UsersService, private router: Router) {

        this.users = store.select('users');

        store.dispatch({type: CLEAN_FILTERS})


        Observable.merge(
            this.search$,
        )
            .subscribe(store.dispatch.bind(store))
       
    }

    addUserClick() {
        this.router.navigate(['/users/add']);
    }
}