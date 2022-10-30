import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs'; 
import { AuthService } from 'src/app/servicios/auth.service';
import { TraerapiService } from 'src/app/servicios/traerapi.service';
import { TraerchatService } from 'src/app/servicios/traerchat.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
})
export class ApiComponent  {

  valorGet: string = "";
  valorPostViejos:string="";
  letras =  this.srvApi.mensaje.length;
  public user$: Observable<any> = this.authSvc.afAuth.user;
 
  constructor(public fire: TraerchatService, public srvApi: TraerapiService, private alertContr: AlertController, private authSvc: AuthService) {}

  ngOnInit() { 
    this.traerValoresApi(); 
  }

  // AlertControler, editar valor de la BD
  async  editarValoresApi(mensaje, clave){
    const alertElement = await this.alertContr.create({
      header: 'Editar',
      inputs: [
        { value: mensaje, placeholder: 'Ingrese el Nuevo mensaje'}
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel'},
        { text: 'Aceptar',
          handler: (mensaje) => { this.editValoresApi(mensaje[0], clave); }
        }
      ]
    });
    await alertElement.present();
  }

  // AlertControler, borrar valor de la BD
  async  borrarValoresApi(item){
    const alertElement = await this.alertContr.create({
      header: 'Lo vas a borrar, estas seguro?',
      message: 'Tene cuidado',
      buttons: [
        { text: 'Cancelar', role: 'cancel'},
        { text: 'Borrar',
          handler: () => { this.srvApi.borrarBD(item).subscribe(t=>{this.traerValoresApi()}); }
        }
      ]
    });
    await alertElement.present();
  }


 
  // editar valores de la BD
    editValoresApi(item, item2){
      this.srvApi.editarBD(item, item2).subscribe(t=>{this.traerValoresApi()});
  }

  // enviar valores a la BDD
  enviarAlaBD(){
    this.srvApi.mostarPOST().subscribe(t=>{
      this.valorPostViejos = t,
      this.traerValoresApi();
      this.srvApi.mensaje = "";
    });
  } 

  // muestro valores de la BD
  async traerValoresApi(){
    this.srvApi.mostrarBD().subscribe( t=>{
        this.valorGet = t, 
        this.scrollTo();
      }
    );
  }

  // llevar scroll al final del div
  async scrollTo(){
    setTimeout(()=>{ 
      const elementList = document.querySelectorAll('.chat');
      const element = elementList[0] as HTMLElement;
      if(element){
      element.scrollTop = element.scrollHeight;}
    },40)
  }


 
}
