import { Component, OnInit } from '@angular/core';
import {MatchServiceService} from './services/match-service.service'

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public items= [];
  result={};
  today:Date = new Date();
  constructor(private MatchServiceService:MatchServiceService) {    
   }
  
  ngOnInit() {
    this.MatchServiceService.getCricket().subscribe((result) => {
        this.items = result.json().content;
    });
  }
}
