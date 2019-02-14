import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { MatchServiceService } from '../services/matches.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-score',
  templateUrl: './update-score.component.html',
  styleUrls: ['./update-score.component.scss']
})

export class UpdateScoreComponent {

  public updateScoreForm: FormGroup;

  team_1: any;
  team_2: any;
  overs = [];
  resData: any = {};

  extras = [
    { id: 3, name: 'Wide' },
    { id: 4, name: 'No Ball' },
    { id: 5, name: 'Free Hit' },
    { id: 6, name: 'Byes' },
    { id: 7, name: 'Leg Byes' }
  ];

  paramvalue: any;
  team_batting: number;
  team_bowling: number;
  match_id: number;
  tournament_id: number;
  toss_winner: number;
  batting_team_players = [];
  bowlig_team_players = [];

  constructor(
    private MatchService: MatchServiceService,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder
  ) {
    const extraControls = this.extras.map(c => new FormControl(false));
    extraControls[0].setValue(true); // Set the first checkbox to true (checked)
    this.updateScoreForm = formBuilder.group({
      over: [],
      ball: [],
      run: [],
      extras: new FormArray(extraControls),
      wicket: [-1],
      fielder: [],
      striker: [],
      bowler: [],
      non_striker: []
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.paramvalue = params.id.split('_');
      this.tournament_id = this.paramvalue[0];
      this.match_id = this.paramvalue[1];
    });
    this.team1_players();
    this.team2_players();
  }

  isEmptyObject() {
    return (this.resData && (Object.keys(this.resData).length === 0));
  }

  getMatchDetails() {
    return new Promise((resolve, reject) => {
      this.MatchService.getMatchDetails(this.match_id).subscribe(
        res => {
          if (res.json().status) {
            console.log(res.json().content);
            this.resData = res.json().content;
            resolve(res.json().content);
          }
        }, err => { console.log(err); }
      );
    });
  }

  getPlayersByTeam(teamId) {
    return new Promise((resolve, reject) => {
      this.MatchService.getPlayersByTeam(teamId).subscribe(
        res => {
          if (res.json().status) {
            resolve(res.json().content.players);
          }
        }, err => { console.log(err); }
      );
    });
  }

  team1_players(): any {
    this.getMatchDetails()
      .then((result: any) => {
        return this.getPlayersByTeam(result.team_1.team_id);
      }, this.errHandler)
      .then((data) => {
        console.log(data);
        this.team_1 = data;
      }, this.errHandler);
  }

  team2_players(): any {
    this.getMatchDetails()
      .then((result: any) => {
        return this.getPlayersByTeam(result.team_2.team_id);
      }, this.errHandler)
      .then((data) => {
        this.getOvers();
        this.team_2 = data;
      }, this.errHandler);
  }

  errHandler(err) {
    console.log(err);
  }

  getOvers() {
    for (let i = 1; i <= this.resData.tournament_id.overs_per_match; i++) {
      this.overs.push(i);
    }
    if (true) {
      this.team_batting = this.resData.toss_winner.team_id;
    }
    this.team_bowling = 1;

    console.log(this.resData);
  }

  updateScore(): void {

    let ballUpdate = {},
      innings_no = 1,
      strikerID = 5,
      nonStrikerID = 6,
      bowler = 7,
      extraRun = 0,
      extraID = 0;

    ballUpdate['tournament_id'] = this.tournament_id;
    ballUpdate['match_id'] = this.match_id;
    ballUpdate['innings_no'] = innings_no;
    ballUpdate['over_id'] = parseInt(this.updateScoreForm.value.over) + '.' + parseInt(this.updateScoreForm.value.ball);
    ballUpdate['ball_id'] = parseInt(this.updateScoreForm.value.ball);
    ballUpdate['striker'] = parseInt(this.updateScoreForm.value.striker);
    ballUpdate['non_striker'] = parseInt(this.updateScoreForm.value.non_striker);
    ballUpdate['bowler'] = parseInt(this.updateScoreForm.value.bowler);
    ballUpdate['team_batting'] = this.team_batting;
    ballUpdate['team_bowling'] = this.team_bowling;
    ballUpdate['runs_scored'] = parseInt(this.updateScoreForm.value.run);

    //Wicket Details
    if (this.updateScoreForm.value.wicket != -1) {
      console.log('It is a wicket');

      //wicket_batsman_id
      if (this.updateScoreForm.value.wicket != '5a') {
        ballUpdate['wicket_batsman_id'] = strikerID;
      } else {
        ballUpdate['wicket_batsman_id'] = nonStrikerID;
        ballUpdate['wicket_type_id'] = 5;
      }

      ballUpdate['wicket_type_id'] = parseInt(this.updateScoreForm.value.wicket);
      //ballUpdate['fielder_id'] = parseInt(this.updateScoreForm.value.fielder);
      ballUpdate['fielder_id'] = bowler;
    }

    //Extra Calculation
    if (!(this.updateScoreForm.value.extras.every((val, i, arr) => val === false))) {
      console.log('It is an extra');
      //byes || leg byes
      if (this.updateScoreForm.value.extras[3]) { //Byes
        extraRun += parseInt(this.updateScoreForm.value.run);
        extraID = 6;
        ballUpdate['runs_scored'] = 0;
      } else if (this.updateScoreForm.value.extras[4]) { //Leg Byes
        extraRun += parseInt(this.updateScoreForm.value.run);
        extraID = 7;
        ballUpdate['runs_scored'] = 0;
      }
      //wide || no ball
      if (this.updateScoreForm.value.extras[0]) { //Wide
        extraRun += 1;
        extraID = 3;
      } else if (this.updateScoreForm.value.extras[1]) { //No Ball
        extraRun += 1;
        extraID = 4;
      } else if (this.updateScoreForm.value.extras[2]) { //Free Hit
        extraID = 5;
      }
      ballUpdate['extra_run'] = extraRun;
      ballUpdate['extra_id'] = extraID;

      if (extraID <= 2 || extraID >= 8) {
        console.error('Logical Error! Something wrong in extra id calculation. extraID= ' + extraID);
      }
    }

    console.log(ballUpdate);

    //if wicket
    //if extra score
    //
    this.MatchService.updateScoreService(ballUpdate).subscribe(data => {
      console.log(data);
    });
  }

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