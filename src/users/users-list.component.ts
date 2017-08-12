import { Component, Input  } from '@angular/core'

@Component({
    selector: 'users-list',
    template: `
                
                    <div *ngFor="let user of users | async" style="margin-top: 0.5rem">
                        <a *ngIf="user.show" routerLink="/users/{{user.id}}">
                            <h3 style="margin-top: 1rem">User id: {{user.id}}, user name: {{user.name}}</h3>
                        </a>    
                    </div>
                `
})
export class UsersListComponent {

    @Input() users

    constructor() {
        console.log('USERS: '+ this.users);
    }

    
}