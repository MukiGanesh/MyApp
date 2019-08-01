import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthenticationGuard, MsAdalAngular6Module } from 'microsoft-adal-angular6';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MsAdalAngular6Module.forRoot({
      tenant: '<YOUR TENANT>',
      clientId: '<YOUR CLIENT / APP ID>',
      redirectUri: window.location.origin,
      endpoints: {
        "https://localhost/api/": "xxx-bae6-4760-b434-xxx"
      },
      navigateToLoginRequestUrl: false,
      cacheLocation: 'localStorage',
    })
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
