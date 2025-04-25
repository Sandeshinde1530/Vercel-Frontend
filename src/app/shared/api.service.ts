import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { RestaurentData } from '../restaurent-dash/restaurent.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ApiService 
{
  [x: string]: any;
  
  // addRestaurent(restaurentModelObj: RestaurentData) 
  // {
  //   return this._http.post<any>("http://localhost:5100/posts/Add", restaurentModelObj).pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  constructor(private _http: HttpClient) { }

  //POST request
  postRestaurent(data: any): Observable<string> {
    return this._http.post('http://localhost:5100/posts/Add', data, { responseType: 'text' }).pipe(
      map((res: string) => {
        return res; 
      })
    );
  }

  //GET request
  getRestaurent(): Observable<RestaurentData[]>
  {
    return this._http.get<any>("http://localhost:5100/posts/").pipe(map((res:any)=>{
      return res;
    }));
  }

  //delete request
  deleteRestaurant( name: string) 
  {
    return this._http.delete<any>("http://localhost:5100/posts/delete/"+name).pipe(map((res:any)=>{
      return res;
    }));
  }

  //update request
  updateRestaurant(id: number, data: any) 
  {
    return this._http.put<any>("http://localhost:5100/posts/Update/"+id,data).pipe(map((res:any)=>{
      return res;
    }));
  }


  //Checking user credentials
  CheckUser(data : any)
  {
    return this._http.post<any>("http://localhost:5100/login/CheckUser/",data).pipe(map((res:any)=>{
      return res;
    }));
  }



}
