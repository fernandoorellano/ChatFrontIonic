import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
  });
  constructor(private authSvc: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onLogin(){
    const {email, password, } = this.loginForm.value;
    try{
      const user = await this.authSvc.login(email, password);
      if (user){
        this.router.navigate(['/inicio']);
      }
    }catch(error){
      console.log(error);
    }
  }

}
