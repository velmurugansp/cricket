import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SignupPage } from './signup';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignupPage
      }
    ])
  ]
})
export class SignupPageModule {}
