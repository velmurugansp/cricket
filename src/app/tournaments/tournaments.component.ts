import { Component } from '@angular/core';
import { TournamentsService } from './services/tournaments.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
    selector: 'app-tournaments',
    templateUrl: 'tournaments.html',
    styleUrls: ['tournaments.scss']
})
export class TournamentsPage {
    static readonly ERROR_MSG = "Please enter required fields";
    tournaments;

    constructor(private TournamentsService: TournamentsService) { this.fetchTournament(); }

    TournamentForm = new FormGroup({
        tournament_name: new FormControl('', Validators.required),
        overs_per_match: new FormControl('', Validators.required),
        organaizer_name: new FormControl('', Validators.required),
        organaizer_number: new FormControl('', Validators.required),
        start_date: new FormControl('', Validators.required),
        end_date: new FormControl('', Validators.required),
    });

    createTournament() {
        let data = this.TournamentForm.value;
        if (data.tournament_name !== '' && data.overs_per_match !== '' && data.organaizer_name) {
            this.TournamentsService.createTournament(data).subscribe(
                res => {
                    console.log(res);
                    if (res.json().status) {
                        console.log(res.json().message);
                        
                    }
                }, err => { console.log(err); }
            );
        } else {
            console.log(TournamentsPage.ERROR_MSG);
        }
    }

    fetchTournament() {
        this.TournamentsService.fetchTournament().subscribe(
            res => {
                if (res.json().status) {
                    this.tournaments = res.json().content;
                }
            }, err => { console.log(err); }

        );
        return this.tournaments;
    }

    refresh(): void {
        window.location.reload();
    }

}
