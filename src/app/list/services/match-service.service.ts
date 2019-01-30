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
  updateScoreService(param){
    console.log(param)
    let params = {
      "tournament_id": 4,
      "match_id": 1,
      "innings_no": 1,
      "over_id": "5.4",
      "ball_id": 4,
      "striker": 5,
      "non_striker": 6,
      "bowler": 7,
      "team_batting": 1,
      "team_bowling": 3,
      "runs_scored": 1,
      "extra_run":0
    }
    console.log(params);
    let endpoint = "http://192.168.100.172/cricscore/public/save_runs",
        headers = new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }),
        options = new RequestOptions({ headers: headers});
        
    return this.http.post(endpoint, param, options).pipe(map(response => {
      result = response;
      return result;
    }));
  }
}
