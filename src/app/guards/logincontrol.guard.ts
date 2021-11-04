import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class LogincontrolGuard implements CanActivate {

  constructor(private storage:Storage)
  {

  }

  async sesionactiva()
  {
    let sesion= await this.storage.get('sesion');
    if (sesion.valor===1)
    {
      return true;
    }
    else{
      return false
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.sesionactiva();
  }
  
}
