import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ApiModule } from './componentes/api/api.module';
import { HeaderModule } from './componentes/header/header.module';
import { ComentarModule } from './componentes/comentar/comentar.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './componentes/login/login.module';
import { RegistroModule } from './componentes/registro/registro.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    IonicModule.forRoot(),
    ApiModule,
    ComentarModule,
    HeaderModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule,
    RegistroModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    AngularFireAuthModule,
    AngularFirestoreModule,
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore()),
  ],
  // exports:[AppModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent],
})
export class AppModule {}
