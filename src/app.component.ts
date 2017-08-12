import { Component } from '@angular/core'


@Component({
    selector: 'app',
    template: `
            <h1 class="title">Library</h1>
            <nav>
            <a routerLink="/users" routerLinkActive="active">Users</a>
            </nav>
            <router-outlet></router-outlet>  
        `
})

export class AppComponent {
    
}