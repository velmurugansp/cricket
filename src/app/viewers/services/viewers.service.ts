import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';
import { Config } from '../../Config';

let result = null;
@Injectable({
    providedIn: 'root'
})

export class ViewerService {

    constructor(private http: Http) { }

    scoreBoardInfo(param): any {
        console.log('test');
        let endpoint = Config.API_URL + '/get_runs',
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
