import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ListPage } from './list.page';
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
        component: ListPage
      },
      {
        path: 'update-score',
        component: UpdateScoreComponent
      }
    ])
  ],
  declarations: [ListPage, UpdateScoreComponent]
})
export class ListPageModule {}