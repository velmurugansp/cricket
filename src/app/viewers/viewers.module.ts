import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewersPage } from './viewers.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ViewersPage,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewersPage
      }
    ])
  ]
})
export class ViewersPageModule { }
