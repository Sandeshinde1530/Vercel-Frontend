import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { signupData } from './signup.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  postUser(data : any): Observable<string>  {
    return this.http.post('mongodb+srv://Sandeshinde:Sanju_1530@clustersandesh.josps6l.mongodb.net/',data , { responseType: 'text' }).pipe(
      map((res : string) => {
      return res;
    })
    );

  }
}
