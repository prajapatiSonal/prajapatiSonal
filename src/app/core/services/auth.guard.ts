/**
 * @description the canActivate guard for checking of user Authentication.
 */
 import { Injectable } from '@angular/core';
 import { CanActivate, Route } from '@angular/router';
 /** -------------------------------------------------------------- */
//  import { AuthService, User } from '../auth/auth.service';
 
 /**
  * AuthGuard
  */
 @Injectable()
 export class AuthGuard implements CanActivate {
 
   constructor() { }
 
   /**
    * ROUTE GUARD FOR AUTHENTICATION
    */
   /**
    * ROUTE GUARD FOR AUTHENTICATION
    */
   public canActivate(): Promise<boolean> {
     return this.getUser();
   }
 
   /**
    * if user is have the return true either go to start authentication 
    */
   public async getUser(): Promise<boolean> {
     let loggedIn: boolean = false;
//      const user: User = await this.authService.getUser();
//      if (user) {
//        loggedIn = true;
//      } else {
//        loggedIn = false;
//        this.authService.login();
//      }
     return loggedIn;
   }
 }
 