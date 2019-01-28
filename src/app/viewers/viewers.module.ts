import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ViewersPage } from './viewers';

@NgModule({
  declarations: [
    ViewersPage,
  ],
  imports: [
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewersPage
      }
    ])
  ]
})
export class ViewersPageModule {}
