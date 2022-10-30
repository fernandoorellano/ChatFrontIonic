export class Mensaje {
    fecha: Date;
    usuario: string;
    mensaje: string;

    constructor(){
        this.fecha= new Date();
        this.usuario = "";
        this.mensaje = "asasa";
    }
}
