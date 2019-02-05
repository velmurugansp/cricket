import { Component } from '@angular/core';
import { PlayersService } from './services/players.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
    selector: 'app-players',
    templateUrl: 'players.html',
    styleUrls: ['players.scss']
})
export class PlayersPage {
    teams;

    constructor(private PlayersService: PlayersService, private route: ActivatedRoute, ) {

        this.route.params.subscribe(params => {
            this.fetchTeamById(params.team_id);
        });

    }
    /*
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.fetchTeamById(params.team_id);
        });
    }
    */
    fetchTeamById(teamId) {
        this.PlayersService.fetchTeamById(teamId).subscribe(
            res => {
                console.log(res.json());
                if (res.json().status) {
                    this.teams = res.json().content;
                }
            }, err => { console.log(err); }
        );
    }
}
