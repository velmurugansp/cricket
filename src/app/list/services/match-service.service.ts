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
    let endpoint = "http://192.168.100.172/cricscore/public/matches";
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
  updateScore(){
    let param = {
      "name": "morpheus",
      "job": "leader"
    }
    let endpoint = "https://reqres.in/api/users";
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    let options = new RequestOptions({ headers: headers});
    return this.http.post(endpoint, param, options).pipe(map(response => {
      result = response;
      return result;
    }));
  }
}
