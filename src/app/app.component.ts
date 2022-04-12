import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './features/shared/services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e_commerce_client'; 
  constructor( private sessionService: SessionService, 
               private router: Router ) {}


  get isLogged() { return this.sessionService.isLogged(); }

  ngOnInit(): void { 
     if (!this.isLogged) {
      this.router.navigate(['/login']);
     }
  }
  logout() {
    this.sessionService.logOut();  
    this.router.navigate(['/login']);
  }

}
