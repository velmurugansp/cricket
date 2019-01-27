import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-score',
  templateUrl: './update-score.component.html',
  styleUrls: ['./update-score.component.scss']
})
export class UpdateScoreComponent implements OnInit {

  constructor() { }
  
  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

  ngOnInit() {
  }

}
