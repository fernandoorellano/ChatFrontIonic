import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TraerapiService {

  api: string = 'http://localhost:8080/';

  nombre: string = "";
  mensaje: string = "";
  
  constructor(public http: HttpClient, private authSvc: AuthService) { }
 
  // EDITAR
  editarBD(item, item2)  {
    // console.log(" mensaje: ", item, "...pass = ", item2);
    return this.http.post(this.api + 'editar/',{item, item2});
  }

  // BORRAR
  borrarBD(item)  {
    // console.log("borrar el ", item);
    return this.http.post(this.api + 'borrar/',{item});
  }
  
  // enviar valores de la api A LA BASEDEDATOS con POST
  mostarPOST(): Observable<any> {
    // return this.http.post(this.api + 'crear/',{"nombre":"nombreFront", "mensaje":"mensajeFront"});
    return this.http.post(this.api + 'crear/',{"nombre":this.authSvc.nombreEmail, "mensaje":this.mensaje, "fecha":new Date().getTime()});
  } 

  // valores de la api con GET
  mostrarBD(): Observable<any> {
    return this.http.get(this.api + 'datos/' );
  }

  // insertar valores en firebase
  mostrarInsertarGET(): Observable<any> {
    return this.http.get(this.api + 'insertar/' );
  }

}
