import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  
import { ApiModule } from '../api/api.module';
import { RouterModule} from '@angular/router';
import { ComentarComponent } from './comentar.component';
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
  declarations: [ComentarComponent],
  exports: [ComentarComponent]
   
})
export class ComentarModule { }
