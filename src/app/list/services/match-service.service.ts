import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import {HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
let result = null;
@Injectable({
  providedIn: 'root'
})
export class MatchServiceService {

  constructor(private http:Http) { }

  getCricket(){  
    let endpoint = "https://reqres.in/api/users?page=2";
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    let options = new RequestOptions({ headers: headers});
    return this.http.get(endpoint, options).pipe(map(response => {
      result = response;
      return result;
    })) 
  }
}
