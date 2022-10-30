import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public user$: Observable<any> = this.authSvc.afAuth.user;
  nombreUsuario = this.user$;
  userLoged = this.authSvc.getUserLogged();
 

  constructor(private router: Router,private authSvc: AuthService) {}

  ngOnInit() {} 

  async onLogout(){
    try{
      await this.authSvc.logout();
      this.router.navigate(['/']);
    }
    catch(error){console.log(error);} 
  }
  

}
