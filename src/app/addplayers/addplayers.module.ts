import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AddPlayersPage } from './addplayers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AddPlayersPage
    ],
    imports: [
        IonicModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: AddPlayersPage
            }
        ])
    ]
})
export class AddPlayersPageModule { }
