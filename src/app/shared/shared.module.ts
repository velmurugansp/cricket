import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,   
      HttpModule,
      FormsModule,
      RouterModule
    ],
    declarations: [],
    exports: [ 
      CommonModule,
      HttpClientModule,   
      HttpModule,
      FormsModule,
      RouterModule
    ]
})

export class SharedModule { }