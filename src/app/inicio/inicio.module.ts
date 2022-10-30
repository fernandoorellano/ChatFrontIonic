import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page'; 
import { ApiModule } from '../componentes/api/api.module';
import { HeaderModule } from '../componentes/header/header.module';
import { ComentarModule } from '../componentes/comentar/comentar.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from '../componentes/login/login.module';
import { RegistroModule } from '../componentes/registro/registro.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    HeaderModule,
    ApiModule,
    ComentarModule,
    HttpClientModule,
    LoginModule,
    RegistroModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
