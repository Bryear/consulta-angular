import { listsService } from './../lists.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-micro-list',
  templateUrl: './micro-list.component.html',
  styleUrls: ['./micro-list.component.css']
})
export class MicroListComponent implements OnInit {

  routesMicro: Array<any>;

  constructor(private listsService: listsService){}

  ngOnInit(): void {

    this.listsService
      .listForMicro()
      .subscribe(data =>{ 
        console.log(data)
        this.routesMicro = data});
    }

}
