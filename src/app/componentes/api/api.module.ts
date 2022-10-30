import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiComponent } from './api.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from '../login/login.module';

@NgModule({ 
  imports: [ 
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    HttpClientModule,
    // LoginModule,  
  ],
  declarations: [ApiComponent],
  bootstrap:    [ ApiComponent ],
  exports: [ApiComponent]
   
})
export class ApiModule { }
