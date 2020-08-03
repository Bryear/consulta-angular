import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeScreenComponent } from './home-screen/home-screen.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { MicroListComponent } from './micro-list/micro-list.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleMicroComponent } from './schedule-micro/schedule-micro.component';

const routes: Routes = [
    {path: '', redirectTo:'/home-screen',pathMatch:'full'}, //redirect to home 
    { path: 'home-screen', component: HomeScreenComponent}, // home screen page
    { path: 'bus-list', component: BusListComponent}, // Bus Routes page
    { path: 'micro-list', component: MicroListComponent}, // MicroBus Routes page
    { path: 'schedule', component: ScheduleComponent}, //Bus Schedule page
    { path: 'schedule-micro', component: ScheduleMicroComponent} //MicroBus Schedule page
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
