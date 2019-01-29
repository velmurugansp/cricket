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
  teamData: string = "teama";
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewersPage');
  }

}
