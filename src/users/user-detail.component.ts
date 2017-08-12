import { Component } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { Store } from '@ngrx/store'
import { ActivatedRoute } from '@angular/router';

import { UsersService } from './users.service'

import 'rxjs/add/operator/map'
import 'rxjs/add/observable/merge'

import { FETCH_USER, RETURN_BOOK } from './user-reducer'


@Component({
    selector: 'users-main',
    template: `
                  <div *ngIf="user">
                    <h2 style="margin-top: 1rem">User id: {{user.id}}, user name: {{user.name}}</h2>
                    <div *ngIf="user.books" style="margin-top: 1rem">
                        <div *ngFor="let book of user.books">
                            <span >Book id: {{book.id}}, book name: {{book.name}}</span><button (click)="returnBook(book)" style="margin-left: 0.5rem">Return</button>    
                        </div>
                    </div>
                  </div>

                `
})
export class UserDetailComponent {

    returnBook = (book) => this.usersService.returnBook(this.id,book.id);
    // returnBook = (book) => this.store.dispatch({type: RETURN_BOOK, payload: { userId: this.id, bookId: book.id }});

    
    user;
    id;
    private sub: any;

    constructor(private store: Store<any>, private route: ActivatedRoute, private usersService: UsersService) {

        store.select('user').subscribe(u => {this.user = u[0]})
       
    }

    private ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.usersService.getUser(this.id);
        });
    }

    private ngOnDestroy() {
        this.sub.unsubscribe();
    }
}