import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';
import { Config } from '../../Config';

let result = null;
@Injectable({
    providedIn: 'root'
})
export class AddPlayersService {

    constructor(private http: Http) { }

    createPlayer(data) {
        let endpoint = Config.API_URL + '/create_player',
            headers = new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }),
            options = new RequestOptions({ headers: headers });
        return this.http.post(endpoint, data, options).pipe(map(response => {
            result = response;
            return result;
        }));
    }

    saveTeamPlayer(data) {
        let endpoint = Config.API_URL + '/save_team_player',
            headers = new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }),
            options = new RequestOptions({ headers: headers });
        return this.http.post(endpoint, data, options).pipe(map(response => {
            result = response;
            return result;
        }));
    }

}
