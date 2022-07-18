import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteAuthenticationGuard implements CanActivate {
  constructor(
    private authService: AuthService, 
    private router: Router
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.isClienteLogado().pipe(
      map((isLogado) => isLogado ? isLogado : this.router.createUrlTree(['/cliente/login']))
    );
  }
  // canActivateChild(
  //   childRoute: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return this.authService.isClienteLogado().pipe(
  //     map((isLogado) => isLogado || this.router.createUrlTree(['/cliente/login']))
  //   );
  // }
  
}
