import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req,next){
    let securityService=this.injector.get(SecurityService)
    let tokenizedReq=req.clone({
      setHeaders:{
        Authorization: `Bearer ${securityService.token}`
      }
    })
    return next.handle(tokenizedReq)
  }
}