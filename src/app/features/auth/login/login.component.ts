import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../shared/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private sessionService: SessionService, 
    private router: Router ) {}

  ngOnInit(): void {
  }

  login() {
    this.sessionService.login(false);
    this.router.navigate(['/product/list']);
  }

  loginAsAdmin() {
    this.sessionService.login(true);
    this.router.navigate(['/product/list']);
  }

}
