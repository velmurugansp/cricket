import { Component, OnInit } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatchServiceService} from './../services/match-service.service'

@Component({
  selector: 'app-update-score',
  templateUrl: './update-score.component.html',
  styleUrls: ['./update-score.component.scss']
})

export class UpdateScoreComponent {
  
  public updateScoreForm: FormGroup;

  constructor(private MatchService: MatchServiceService, public formBuilder: FormBuilder) {
    this.updateScoreForm = formBuilder.group({
      over: [1, Validators.required],
      ball: ['', Validators.required],
      run: ['', Validators.required],
      extra: ['', Validators.required],
      wicket: ['', Validators.required],
      fielder: ['', Validators.required]
    });
  }

  updateScore1(): void {
    this.MatchService.updateScore(this.updateScoreForm.value).subscribe(data=>{});
  }

  // ngOnInit() {
  //   this.MatchService.updateScore().subscribe((result) => {
  //     console.log(result);  
  //   });
  // }

  // updateScoreForm = new FormGroup({
  //   over: new FormControl(),
  //   last: new FormControl(),
  //   ball: new FormControl(),
  //   run: new FormControl(),
  //   extra: new FormControl(),
  //   wicket: new FormControl(),
  //   fielder: new FormControl()
  // });

 
}