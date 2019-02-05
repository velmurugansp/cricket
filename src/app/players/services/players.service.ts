import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';
import { Config } from './../../Config';

let result = null;
@Injectable({
    providedIn: 'root'
})
export class PlayersService {

    constructor(private http: Http) { }

    fetchTeamById(teamId) {
        let endpoint = Config.API_URL + '/team/' + teamId,
            headers = new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }),
            options = new RequestOptions({ headers: headers });

        return this.http.get(endpoint, options).pipe(map(response => {
            result = response;
            return result;
        }));
    }

}