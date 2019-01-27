import { Component, OnInit } from '@angular/core';
import {MatchServiceService} from './../services/match-service.service'

@Component({
  selector: 'app-update-score',
  templateUrl: './update-score.component.html',
  styleUrls: ['./update-score.component.scss']
})
export class UpdateScoreComponent implements OnInit {

  constructor(private MatchService:MatchServiceService) { }

  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

  ngOnInit() {
    this.MatchService.updateScore().subscribe((result) => {
      console.log(result);  
    });
  }
}
