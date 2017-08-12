import { Component } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { Store } from '@ngrx/store'

import { UsersService } from './users.service'


import 'rxjs/add/operator/map'
import 'rxjs/add/observable/merge'

import { ADD_USER } from './users-reducer'


@Component({
    selector: 'users-add',
    template: `
                <span>User name:</span><input #inputName type="text" >
                <!--<button (click)="click$.next(inputName.value)" >Add</button>-->
                <button (click)="click(inputName.value)" >Add</button>
                <users-list [users]="users"></users-list>
                `
})
export class UsersAddComponent {

    // click$ = new Subject()
    //     .map((value: string) => ({type: ADD_USER, payload: value}))

    users;
    
    constructor(store: Store<any>, private usersService: UsersService) {

        this.users = store.select('users');
        
        // Observable.merge(
        //     this.click$,
        // )
        //     .subscribe(store.dispatch.bind(store))
    }

    click = (name) => {
        this.usersService.addUser(name);
    }
}