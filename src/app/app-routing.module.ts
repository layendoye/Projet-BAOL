import { AuthGuard } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { ListeProduitsComponent } from './produit/liste-produits/liste-produits.component';
//import { ListeUsersComponent } from './user/liste-users/liste-users.component';
import { ListeadminComponent } from './Entreprise/listeadmin/listeadmin.component';
import { VenteComponent } from './produit/vente/vente.component';
import { NewventeComponent } from './produit/newvente/newvente.component';
import { AddProduitComponent } from './produit/add-produit/add-produit.component';
import { FormtransfertComponent } from './produit/formtransfert/formtransfert.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/vente',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'produits', canActivate: [AuthGuard] , component: ListeProduitsComponent},
  { path: 'vente', canActivate: [AuthGuard] , component: VenteComponent},
  { path: 'Entreprise', canActivate: [AuthGuard] , component: ListeadminComponent},
  { path: 'newvente', canActivate: [AuthGuard] , component: NewventeComponent},
  { path: 'produit/new', canActivate: [AuthGuard] , component: AddProduitComponent},
  { path: 'form', canActivate: [AuthGuard] , component: FormtransfertComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
