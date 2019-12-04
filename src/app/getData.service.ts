import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import {map, catchError} from "rxjs/operators";

import { Observable, throwError } from 'rxjs';
  
@Injectable()  
export class getDataService {  
  
  constructor(private http: Http) { }  
  
  
  GetCreditGrowth(){       
    return this.http.get('http://localhost:8080/api/getCreditGrowth/')
    .pipe(
      map((e:Response)=> e.json()),
      catchError((e:Response)=> throwError(e))
    );
  }  
  GetGlobalHousePrice(){       
    return this.http.get('http://localhost:8080/api/getGlobalHousePrice/')
    .pipe(
      map((e:Response)=> e.json()),
      catchError((e:Response)=> throwError(e))
    );
  } 
  GetPriceToincome(){       
    return this.http.get('http://localhost:8080/api/getPriceToincome/')
    .pipe(
      map((e:Response)=> e.json()),
      catchError((e:Response)=> throwError(e))
    );
  }
  GetFHFA(){       
    return this.http.get('http://localhost:8080/api/getFHFA/')
    .pipe(
      map((e:Response)=> e.json()),
      catchError((e:Response)=> throwError(e))
    );
  }

  getHousePricesAroundtheWorld(){       
    return this.http.get('http://localhost:8080/api/getHousePricesAroundtheWorld/')
    .pipe(
      map((e:Response)=> e.json()),
      catchError((e:Response)=> throwError(e))
    );
  }
  getHousePricesCountYear(){       
    return this.http.get('http://localhost:8080/api/getHousePricesCountYear/')
    .pipe(
      map((e:Response)=> e.json()),
      catchError((e:Response)=> throwError(e))
    );
  }
  /*
 deleteUser(id){   
    return this.http.post('http://localhost:8080/api/deleteUser/',{'id': id})  
    .pipe(
      map((e:Response)=> e.json()),
      catchError((e:Response)=> throwError(e))
    );
  }  
  */
 /*
  saveUser(user){      
    return this.http.post('http://localhost:8080/api/SaveUser/', user)
    .pipe(
      map((e:Response)=> e.json()),
      catchError((e:Response)=> throwError(e))
    );
  }  
  */
}  