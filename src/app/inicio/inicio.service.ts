import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  public user$: Observable<any> = this.authSvc.afAuth.user;
  
  constructor(private authSvc: AuthService) {}

}
