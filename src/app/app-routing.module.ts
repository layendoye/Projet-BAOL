import { AuthGuard } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { ListeProduitsComponent } from './produit/liste-produits/liste-produits.component';
import { ListeUsersComponent } from './user/liste-users/liste-users.component';


const routes: Routes = [
  { path: '', canActivate: [AuthGuard] , component: ListeProduitsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'produits', canActivate: [AuthGuard] , component: ListeProduitsComponent},
  { path: 'users', canActivate: [AuthGuard] , component: ListeUsersComponent},
  //{ path: 'not-found', component:FourOhFourComponent},
  //{ path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
