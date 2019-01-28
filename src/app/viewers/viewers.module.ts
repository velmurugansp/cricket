import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewersPage } from './viewers';

@NgModule({
  declarations: [
    ViewersPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewersPage),
  ],
})
export class ViewersPageModule {}
