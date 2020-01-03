import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {Vente} from '../models/vente';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {
  formData:Vente;
  private urlVente :string="http://127.0.0.1:";
  constructor(private http:HttpClient) { }

  Formvente(vente){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const formData: FormData = new FormData();
    formData.append('nomproduit', vente.nomProduit);
    formData.append('prixunitaire', vente.prixunitaire);
    formData.append('quantite', vente.quantite);
    return this.http.post<any>(this.urlVente , formData,{headers : headers});
  }
}
