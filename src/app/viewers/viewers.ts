import { Component } from '@angular/core';

/**
 * Generated class for the ViewersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-viewers',
  templateUrl: 'viewers.html',
  styleUrls: ['viewers.scss']
})

export class ViewersPage {
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewersPage');
  }

  toggleScoreboard(ev: any) {
    document.querySelector("ion-segment.teamDataHeader").querySelectorAll("ion-segment-button").forEach(e =>
      e.classList.remove("active"));
    document.querySelector(`ion-segment ion-segment-button.${ev.detail.value}`).classList.add('active');

    document.getElementById("teamScoreBoard").querySelectorAll("ion-list").forEach(e =>
      e.classList.add("hide"));
    document.querySelector(`#teamScoreBoard .${ev.detail.value}ScoreBoard`).classList.remove('hide');
  }

}
