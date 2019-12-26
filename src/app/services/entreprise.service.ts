import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  private urlBack='http://127.0.0.1:5000';
  constructor(private httpClient: HttpClient) { }
  getEntreprise(){
    return this.getElement("/Entreprise");
  }
  setEntreprise(data:any){
    return this.postElement(data,"/ajout_admin/");
  }
  getOneEntreprise(id:number){
    return this.getElement("/modif_admin/"+id);
  }
  updateEntreprise(id:number,data:any){
    return this.postElement(data,"/modif_admin/"+id);
  }
  bloquerPart(id:any){
    return this.getElement("/modif_statusadmin/"+id);
  }
  postElement(data:any,url:string){//return une promise
    return new Promise<any>(
      (resolve,reject)=>{
      this.httpClient
        .post<any>(this.urlBack+url,data).subscribe(
          rep=>{
          resolve(rep);
          },
          error=>{
            console.log('Erreur : '+error.message);
            reject(error);
          }
        );
    })
  }
  getElement(url:string){
    return new Promise<any>(
      (resolve,reject)=>{
      this.httpClient
        .get<any>(this.urlBack+url).subscribe(
          rep=>{
            resolve(rep);
          },
          error=>{
            console.log('Erreur : '+error.message);
            reject(error);
          }
        );
      })
  }
}
