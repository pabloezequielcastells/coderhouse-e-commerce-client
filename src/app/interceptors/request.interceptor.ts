import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../features/shared/services/session.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor( private sessionService: SessionService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addHeaders(request));
  }

  addHeaders(req: HttpRequest<any>): HttpRequest<any> {
    req = req.clone({ headers: req.headers.set('IsAdmin', JSON.stringify(this.sessionService.isAdmin())) });
    return req;
  }
}
