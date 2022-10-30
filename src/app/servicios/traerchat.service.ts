import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Mensaje } from '../clases/mensaje';

@Injectable({
  providedIn: 'root'
})
export class TraerchatService {

  constructor(public firestore: AngularFirestore) { }

  setItem(miMensaje: Mensaje){
    var mensajes = this.firestore.collection('Mensaje');
    mensajes.add(JSON.parse(JSON.stringify(miMensaje)));
    // console.log("Se agrego");
  }

  traerColeccion():Observable<any> {
    var Mensajes = this.firestore.collection('Mensaje', ref => ref.orderBy('fecha','asc'));
    return Mensajes.valueChanges();
  }
  
}
