import { listsService } from './../lists.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  scheduleBus: Array<any>;

  constructor(private listsService:listsService) {}

  ngOnInit(): void {

    this.listsService
    .listSchedule()
    .subscribe(data =>{ 
      console.log(data)
      this.scheduleBus = data});

  }

}
