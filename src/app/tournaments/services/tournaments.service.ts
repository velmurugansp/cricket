import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';
import { Config } from './../../Config';

let result = null;
@Injectable({
    providedIn: 'root'
})
export class TournamentsService {

    constructor(private http: Http) { }


    createTournament(data) {console.log(data);

        let param = {
            "tournament_name": data.tournament_name,
            "overs_per_match": data.overs_per_match,
            "organaizer_name": data.organaizer_name,
            "organaizer_number": data.organaizer_number,
            "start_date": data.start_date,
            "end_date": data.end_date
        };

        let endpoint = Config.API_URL + '/create_tournament',
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

    fetchTournament() {
        let endpoint = Config.API_URL + '/tournaments',
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
