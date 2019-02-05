import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TeamsPage } from './teams.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        TeamsPage
    ],
    imports: [
        IonicModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: TeamsPage
            }
        ])
    ]
})
export class TeamsPageModule { }
