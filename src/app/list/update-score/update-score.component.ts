import { Component, OnInit } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, FormControl, FormArray, FormGroup, Validators} from '@angular/forms';
import {MatchServiceService} from './../services/match-service.service'

@Component({
  selector: 'app-update-score',
  templateUrl: './update-score.component.html',
  styleUrls: ['./update-score.component.scss']
})

export class UpdateScoreComponent {
  
  public updateScoreForm: FormGroup;
          resData;
  
  extras = [
    { id: 3, name: 'Wide' },
    { id: 4, name: 'No Ball' },
    { id: 5, name: 'Free Hit' },
    { id: 6, name: 'Byes' },
    { id: 7, name: 'Leg Byes' }
  ];

  constructor(private MatchService: MatchServiceService, public formBuilder: FormBuilder) {
    
    const extraControls = this.extras.map(c => new FormControl(false));
    extraControls[0].setValue(true); // Set the first checkbox to true (checked)

    this.updateScoreForm = formBuilder.group({
      over: [],
      ball: [],
      run: [],
      extras: new FormArray(extraControls),
      wicket: [-1],
      fielder: []
    });
  }
  
  
  myFunction(body){
    this.MatchService.updateScoreService(body).subscribe(
      res => { this.resData = res },
      err => { console.log(err) }
    );
    console.log("hi");
  }
  updateScore1(): void {

    let ballUpdate = {},
        tournament_id = 4,
        match_id = 1,
        innings_no = 1,
        team_batting = 1,
        team_bowling = 3,
        strikerID = 5,
        nonStrikerID = 6,
        bowler = 7,
        extraRun = 0,
        extraID = 0;
    13.25
    14.99
    11.80
    ballUpdate["tournament_id"] = tournament_id;
    ballUpdate["match_id"] = match_id;
    ballUpdate["innings_no"] = innings_no; //
    ballUpdate["over_id"] = parseInt(this.updateScoreForm.value.over) +"."+ parseInt(this.updateScoreForm.value.ball);
    ballUpdate["ball_id"] = parseInt(this.updateScoreForm.value.ball);
    ballUpdate["striker"] = strikerID;
    ballUpdate["non_striker"] = nonStrikerID;
    ballUpdate["bowler"] = bowler;
    ballUpdate["team_batting"] = team_batting;
    ballUpdate["team_bowling"] = team_bowling;
    ballUpdate["runs_scored"] =  parseInt(this.updateScoreForm.value.run);

    //Wicket Details
    if(this.updateScoreForm.value.wicket != -1){
      console.log('It is a wicket');
          
      //wicket_batsman_id
      if(this.updateScoreForm.value.wicket != "5a"){
        ballUpdate["wicket_batsman_id"] = strikerID;
      }else{
        ballUpdate["wicket_batsman_id"] = nonStrikerID;
        ballUpdate["wicket_type_id"] = 5;
      }

      ballUpdate["wicket_type_id"] = parseInt(this.updateScoreForm.value.wicket);
      //ballUpdate["fielder_id"] = parseInt(this.updateScoreForm.value.fielder);
      ballUpdate["fielder_id"] = bowler;
    }

    //Extra Calculation
    if (!(this.updateScoreForm.value.extras.every( (val, i, arr) => val === false ))){
      console.log('It is an extra');
      //byes || leg byes
      if(this.updateScoreForm.value.extras[3]){ //Byes
        extraRun += parseInt(this.updateScoreForm.value.run);
        extraID = 6;
        ballUpdate["runs_scored"] =  0;
      } else if(this.updateScoreForm.value.extras[4]){ //Leg Byes
        extraRun += parseInt(this.updateScoreForm.value.run);
        extraID = 7;
        ballUpdate["runs_scored"] =  0;
      }
      //wide || no ball
      if(this.updateScoreForm.value.extras[0]){ //Wide
        extraRun += 1;
        extraID = 3;
      } else if(this.updateScoreForm.value.extras[1]){ //No Ball
        extraRun += 1;
        extraID = 4;
      }else if(this.updateScoreForm.value.extras[2]){ //Free Hit
        extraID = 5;
      }
      ballUpdate["extra_run"] = extraRun;
      ballUpdate["extra_id"] = extraID;

      if(extraID <= 2 || extraID >= 8){
        console.error("Logical Error! Something wrong in extra id calculation. extraID= "+extraID);
      }
    }

    console.log(ballUpdate);

    //if wicket
    //if extra score
    //
    this.MatchService.updateScoreService(ballUpdate).subscribe(data=>{
      console.log(data);
    });
  }

  // ngOnInit() {
  //   this.MatchService.updateScoreService(params).subscribe((result) => {
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