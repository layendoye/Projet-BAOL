import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
//import { Profil } from '../models/Profil.model';
import Swal from 'node_modules/sweetalert2/dist/sweetalert2.js';
import { promise } from 'protractor';
import { resolve } from 'url';
import { reject } from 'q';
//import { Utilisateur } from '../models/Utilisateur.model';
@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  jwtHelper = new JwtHelperService;
  token:string;
  isAuth=false;
  private urlBack='http://127.0.0.1:8000';
  constructor(private httpClient: HttpClient,
              private router:Router) {
  }
  login(data:any){
    return new Promise(
      (resolve, reject)=>{
      this.httpClient
        .post<any>('http://127.0.0.1:8000/connexion',data)
        .subscribe(
          (rep)=>{
            console.log(rep)
            this.isAuth=true;
            this.token=rep.token;
            localStorage.setItem('token', rep.token);
            const tokenDeco=this.jwtHelper.decodeToken(rep.token);
            localStorage.setItem('username', tokenDeco.username);
            localStorage.setItem('roles', tokenDeco.roles);
            resolve();
          },
          (error)=>{
            console.log('Erreur d\'authentification : '+error.message);
            const message=error.message;
            if(message.search('403')>=0){
              Swal.fire(
                'Erreur',
                'Vous etes bloqué !',
                'error'
              )
            }
            reject(error);
          }
        );
      })
  }
  logOut(){
    this.isAuth=false;
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

