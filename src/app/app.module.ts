import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { BusListComponent } from './bus-list/bus-list.component';
import { MicroListComponent } from './micro-list/micro-list.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ScheduleMicroComponent } from './schedule-micro/schedule-micro.component';

@NgModule({
  declarations: [
    AppComponent,
    BusListComponent,
    MicroListComponent,
    ScheduleComponent,
    HomeScreenComponent,
    ScheduleMicroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
