import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MatchPage } from './matches.component';
import { UpdateScoreComponent } from './update-score/update-score.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MatchPage
      },
      {
        path: 'update-score/:id',
        component: UpdateScoreComponent
      }
    ])
  ],
  declarations: [MatchPage, UpdateScoreComponent]
})
export class MatchPageModule { }