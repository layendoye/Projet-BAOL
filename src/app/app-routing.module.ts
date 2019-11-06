import { AuthGuard } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { ListeComponent } from './produit/liste/liste.component';


const routes: Routes = [
  { path: '', canActivate: [AuthGuard] , component: ListeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'liste', canActivate: [AuthGuard] , component: ListeComponent},
  //{ path: 'not-found', component:FourOhFourComponent},
  //{ path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
