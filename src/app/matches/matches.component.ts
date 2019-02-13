import { Component, OnInit } from '@angular/core';
import { MatchServiceService } from './services/matches.service'

@Component({
  selector: 'app-matches',
  templateUrl: 'matches.html',
  styleUrls: ['matches.scss']
})
export class MatchPage implements OnInit {
  public items = [];
  result = {};
  today: Date = new Date();
  constructor(private MatchServiceService: MatchServiceService) {
  }

  ngOnInit() {
    this.MatchServiceService.getCricket().subscribe((result) => {
      this.items = result.json().content;
      console.log(this.items);
    });
  }
}
