import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro2',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  user = []; 
  usuario = {
    email: '', pass: ''
  }

  ngOnInit() {}

  constructor(private authSvc: AuthService, private router: Router) {}


  onRegister(){
    const { email, pass } = this.usuario;
    this.authSvc.register(email, pass).then(user => { 
      let lista = [...this.user];
      let existe = lista.find(user => user.email == email);

      if (!existe) {
        this.router.navigate(['/inicio']);
      };
    }).catch(err => {
      console.log(err)
    })
  }

}
