import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { Router } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';
import { AppStoreModule }          from './app-store'

import { UsersModule }            from './users/users.module';
import { PageNotFoundComponent }   from './not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    UsersModule,
    AppRoutingModule,
    AppStoreModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
