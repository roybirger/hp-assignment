import { Injectable } from '@angular/core';
import { Headers, Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Store } from '@ngrx/store'

import { UPDATE_USERS, ADD_USER } from './users-reducer'
import { UPDATE_USER } from './user-reducer'

import 'rxjs/add/operator/toPromise';


@Injectable()
export class UsersService {

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http, private store:Store<any>, private userstore:Store<any>) {
        store.select('users');
        userstore.select('user');
        this.getUsers();
    }

    getUsers = ()  => {
        this.http.get('/api/users')
                .toPromise()
                .then(response => {
                    var data = response.json();
                    data.users = data.users.map((user) => {
                        user.show = true;
                        return user;
                    })
                    this.store.dispatch({type: UPDATE_USERS, payload: data })
                });
    }

    addUser = (name) => {
        this.http.post('/api/user/add',JSON.stringify({user: {
            name: name
        }}),{headers: this.headers}).toPromise().then(response => {
            this.store.dispatch({type: ADD_USER, payload: name})
        })
    }

    getUser = (id) => {
        this.http.get('/api/get_user/' + id).toPromise().then(response => {
            var data = response.json();
            if (data.success) {
                this.userstore.dispatch({type: UPDATE_USER, payload: data.user})
            }
        })
    }

    returnBook = (userId, bookId) => {
        this.http.post('/api/user_return',JSON.stringify({data: { userId,bookId }}),{headers: this.headers})
        .toPromise().then(response => {
            var data = response.json();
            if (data.success) {
                this.userstore.dispatch({type: UPDATE_USER, payload: data.user})
            }
        })
    }

    

}