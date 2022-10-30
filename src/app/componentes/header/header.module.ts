import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  
import { HeaderComponent } from './header.component';
import { ApiModule } from '../api/api.module';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({ 
  imports: [ 
    CommonModule,
    FormsModule,
    IonicModule,
    ApiModule,
    RouterModule,
    HttpClientModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
   
})
export class HeaderModule { }
