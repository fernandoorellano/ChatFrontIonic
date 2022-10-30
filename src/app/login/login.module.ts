import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { AppModule } from '../app.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore } from 'firebase/firestore';
import { provideFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from '../componentes/login/login.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule,
    HttpClientModule,
    LoginModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    AngularFireAuthModule,
    AngularFirestoreModule,
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore()),
    // AppModule
  ],
 
  declarations: [LoginPage]
})
export class LoginPageModule {}
