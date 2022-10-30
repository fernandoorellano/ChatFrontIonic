import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';   
import { ApiModule } from '../api/api.module';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { provideFirestore } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { LoginPageRoutingModule } from 'src/app/login/login-routing.module';
import { environment } from 'src/environments/environment';

@NgModule({ 
  imports: [ 
    CommonModule,
    FormsModule,
    IonicModule,
    ApiModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore()),
    // AppModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
   
})
export class LoginModule { }
