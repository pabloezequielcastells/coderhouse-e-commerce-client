import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class SessionService {
    public async login( isAdmin: boolean ) {
        this.logOut(); 
        localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
      }
    
      logOut() {
        localStorage.removeItem('isAdmin');
      }

      isAdmin() {
        return JSON.parse(localStorage.getItem('isAdmin') ?? 'false');
      }

      isLogged() {
        return localStorage.getItem('isAdmin') !== null;
      }
  }