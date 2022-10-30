import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';   
import { ApiModule } from '../api/api.module';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { RegistroComponent } from './registro.component';

@NgModule({ 
  imports: [ 
    CommonModule,
    FormsModule,
    IonicModule,
    ApiModule,
    RouterModule,
    HttpClientModule,
  ],
  declarations: [RegistroComponent],
  exports: [RegistroComponent]
   
})
export class RegistroModule { }
