import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  token: string='';
  signInForm: FormGroup;
  errorMessage: string;
  constructor(private formBuilder: FormBuilder,
              private securityService: SecurityService ,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
    localStorage.removeItem('token');
  }
  initForm(){
    this.signInForm=this.formBuilder.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.pattern(/[0-9a-z-A-Z]{2,}/)]]//comme ca le password va contenir au moins 2 caracteres
    });
  } 
  onSubmit(){
    // this.securityService.login(this.signInForm.value).then(
    //   ()=>{//si tous ce passe bien
    //     console.log(localStorage);
    //     //window.location.reload();
    //   },
    //   (error)=>{
    //     this.errorMessage='Erreur sur le login ou le mot de passe';
    //   }
    // );
    this.securityService.isAuth=true;
    this.router.navigate(['']);
  }
}
