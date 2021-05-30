import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child } from './child/child.component';
import { Route1 } from './route1/route1.component';
import { Dashboard } from './dashboard/dashboard.component';
import { ButtonModule } from 'primeng/button';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    Child,
    Route1,
    Dashboard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
