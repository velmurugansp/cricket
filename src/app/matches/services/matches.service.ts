import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Config } from '../../Config';

let result = null;
@Injectable({
  providedIn: 'root'
})
export class MatchServiceService {

  constructor(private http: Http) { }

  getCricket() {
    let endpoint = Config.API_URL + "/matches";
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(endpoint, options).pipe(map(response => {
      result = response;
      return result;
    }))
  }

  getMatchDetails(id) {
    let endpoint = Config.API_URL + "/match/" + id;
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(endpoint, options).pipe(map(response => {
      result = response;
      return result;
    }));
  }

  getPlayersByTeam(id) {
    let endpoint = Config.API_URL + "/get_team_players/" + id;
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(endpoint, options).pipe(map(response => {
      result = response;
      return result;
    }));
  }

  updateScoreService(param) {
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
      "extra_run": 0
    }
    console.log(params);
    let endpoint = Config.API_URL + "/save_runs",
      headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }),
      options = new RequestOptions({ headers: headers });

    return this.http.post(endpoint, param, options).pipe(map(response => {
      result = response;
      return result;
    }));
  }
}
