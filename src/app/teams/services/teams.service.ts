import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';
import { Config } from './../../Config';

let result = null;
@Injectable({
    providedIn: 'root'
})
export class TeamService {

    constructor(private http: Http) { }


    createTeam(data) {

        let param = {
            "team_name": data.team_name,
            "team_city": data.team_city
        };

        let endpoint = Config.API_URL + '/create_team',
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

    fetchTeam() {
        let endpoint = Config.API_URL + '/teams',
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
