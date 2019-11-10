import { EntrepriseService } from './services/entreprise.service';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './security/login/login.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {SecurityService} from './services/security.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ListeUsersComponent} from './user/liste-users/liste-users.component';
import {ListeProduitsComponent} from './produit/liste-produits/liste-produits.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    ListeProduitsComponent,
    ListeUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//pour les forms
    ReactiveFormsModule,//pour les forms
    HttpClientModule, BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
  SecurityService,
  EntrepriseService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
