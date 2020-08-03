import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Default link
const searchAPI = 'http://www.poatransporte.com.br/php/facades/process.php?a=';

@Injectable({ providedIn: 'root'})
export class listsService {
 

  constructor(private http: HttpClient){}
  
  listForBus(){
      return this.http
      .get<any[]>(searchAPI + 'nc&p=%25&t=o'); //Link for the Bus Routes
  }

  listForMicro(){
    return this.http
    .get<any[]>(searchAPI + 'nc&p=%25&t=l'); // Link for the Micro Bus
  }

  listSchedule(){
    return this.http
    .get<any[]>(searchAPI + `il&p=`); //Para as coordenadas
  }

}

//`${this.searchAPI}` a=nc&p=%25&t=o il&p=5527 + 'nc&p=%25&t=o'