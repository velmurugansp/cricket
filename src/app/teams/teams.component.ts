import { Component } from '@angular/core';
import { TeamService } from './services/teams.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
    selector: 'app-teams',
    templateUrl: 'teams.html',
    styleUrls: ['teams.scss']
})
export class TeamsPage {
    static readonly ERROR_MSG = "Please enter required fields";
    teams;

    constructor(private TeamService: TeamService) { this.fetchTeam(); }

    TeamForm = new FormGroup({
        team_name: new FormControl('', Validators.required),
        team_city: new FormControl('', Validators.required)
    });

    createTeam() {
        let data = this.TeamForm.value;
        if (data.team_name !== '' && data.team_city !== '') {
            this.TeamService.createTeam(data).subscribe(
                res => {
                    console.log(res);
                    if (res.json().status) {
                        console.log(res.json().message);
                        this.refresh();
                    }
                }, err => { console.log(err); }
            );
        } else {
            console.log(TeamsPage.ERROR_MSG);
        }
    }

    fetchTeam() {
        this.TeamService.fetchTeam().subscribe(
            res => {
                if (res.json().status) {
                    this.teams = res.json().content;
                }
            }, err => { console.log(err); }

        );
        return this.teams;
    }

    refresh(): void {
        window.location.reload();
    }

}
