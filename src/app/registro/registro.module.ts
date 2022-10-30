import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';
import { HttpClientModule } from '@angular/common/http';
import { RegistroModule } from '../componentes/registro/registro.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    HttpClientModule,
    RegistroModule
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
