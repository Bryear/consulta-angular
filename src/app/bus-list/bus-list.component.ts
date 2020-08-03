import { Component, OnInit } from '@angular/core';

import { listsService } from './../lists.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  routesBus: Array<any>;

  constructor(
    
    private listsService: listsService){}

  ngOnInit(): void {

    this.listsService
      .listForBus()
      .subscribe(info =>{ 
        console.log(info)
        this.routesBus = info});
    }
 }
