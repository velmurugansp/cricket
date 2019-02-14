import { Component } from '@angular/core';
import { ViewerService } from './services/viewers.service';

@Component({
  selector: 'page-viewers',
  templateUrl: 'viewers.html',
  styleUrls: ['viewers.scss']
})

export class ViewersPage {

  response: any = {};
  innings1: any = {};
  innings1_players = [];
  innings1_bowlers = [];
  innings2: any = {};
  innings2_players = [];
  innings2_bowlers = [];

  constructor(private ViewerService: ViewerService) {
    this.getScoreBoardInfo();
  }

  getScoreBoardInfo() {
    const obj = {
      'tournament_id': 4,
      'match_id': 1,
      'innings_no': 1
    };
    this.ViewerService.scoreBoardInfo(obj).subscribe(
      res => {
        if (res.json().status) {
          this.response = res.json().content;
          this.innings1 = this.response.innings[0];
          this.innings1_players = this.innings1.players_score_info;
          this.innings1_bowlers = this.innings1.bowlers_wicket_info;

          if (typeof this.response.innings[1] !== 'undefined') {
            this.innings2 = this.response.innings[0];
            this.innings2_players = this.innings2.players_score_info;
            this.innings2_bowlers = this.innings2.bowlers_wicket_info;
          }
          console.log(this.innings1);
        }
      }, err => { console.log(err); }

    );
  }


  isEmptyObject() {
    return (this.response && (Object.keys(this.response).length === 0));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewersPage');
  }

  toggleScoreboard(ev: any) {
    document.querySelector('ion-segment.teamDataHeader').querySelectorAll('ion-segment-button').forEach(e =>
      e.classList.remove('active'));
    document.querySelector(`ion-segment ion-segment-button.${ev.detail.value}`).classList.add('active');

    document.getElementById('teamScoreBoard').querySelectorAll('ion-list').forEach(e =>
      e.classList.add('hide'));
    document.querySelector(`#teamScoreBoard .${ev.detail.value}ScoreBoard`).classList.remove('hide');
  }

}
