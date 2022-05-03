import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthCheckServiceForUser implements CanActivate{

  constructor(private router: Router,private authenticationService:AuthenticationService) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  if(this.authenticationService.isUserLogged()){
    return true;
  }
  this.router.navigate(['login']);
  return false;
}

}
