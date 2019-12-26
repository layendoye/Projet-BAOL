import { Component, OnInit, ViewChild } from '@angular/core';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Entreprise} from 'src/app/models/entreprise';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import Swal from 'node_modules/sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-listeadmin',
  templateUrl: './listeadmin.component.html',
  styleUrls: ['./listeadmin.component.scss']
})
export class ListeadminComponent implements OnInit {
  add=false;
  id:number=0;
  entrepriseForm: FormGroup;
  entreprises:Entreprise[]=[]
  entreprise:Entreprise={nom:'',adresse:'',email:'',telephone:'',username:'',adresseEntreprise:'',nomEntreprise:''};
  update=false;
  displayedColumns: string[] = ['nom', 'Adresse','email', 'telephone', 'nomentreptise','adresseEntreprise', 'status', 'Modifier'];
  dataSource: MatTableDataSource<Entreprise>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private entrepriseService:EntrepriseService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.fgetEntreprise();
    this.initForm();
  }
  initForm(){
    this.entrepriseForm=this.formBuilder.group({   
      nom:[this.entreprise.nom,[Validators.required,Validators.minLength(2)]],
      adresse:[this.entreprise.adresse,[Validators.required,Validators.minLength(2)]],
      email:[this.entreprise.email,[Validators.required,Validators.email,Validators.minLength(2)]],
      tel:[this.entreprise.telephone,[Validators.required,Validators.minLength(2),Validators.pattern(/[0-9]/)]],
      username:[this.entreprise.username,[Validators.required,Validators.minLength(2)]],
      nom_entreprise:[this.entreprise.nomEntreprise,[Validators.required,Validators.minLength(2)]],
      adresse_entreprise:[this.entreprise.adresseEntreprise,[Validators.required,Validators.minLength(2)]]
    });
  }
  getEntreprise(){
    this.entrepriseService.getEntreprise().then(
      entreprises=>{
        this.entreprises=entreprises;
        this.dataSource = new MatTableDataSource(this.entreprises);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error=>{
        console.log(error);
      }
    )
  }
  fgetEntreprise(){
    this.entreprises=[
      {nom:'nom1',username:'username1',email:'email1',telephone:'telephone1',adresse:'adresse1',status:'Actif',adresseEntreprise:'adresse 1'},
      {nom:'nom2',username:'username2',email:'email2',telephone:'telephone2',adresse:'adresse2',status:'Actif',adresseEntreprise:'adresse 2'},
      {nom:'nom3',username:'username3',email:'email3',telephone:'telephone3',adresse:'adresse3',status:'Actif',adresseEntreprise:'adresse 3'},
      {nom:'nom4',username:'username4',email:'email4',telephone:'telephone4',adresse:'adresse4',status:'Actif',adresseEntreprise:'adresse 4'},
      {nom:'nom5',username:'username5',email:'email5',telephone:'telephone5',adresse:'adresse5',status:'Actif',adresseEntreprise:'adresse 5'},
      {nom:'nom6',username:'username6',email:'email6',telephone:'telephone6',adresse:'adresse6',status:'Actif',adresseEntreprise:'adresse 6'},
      {nom:'nom7',username:'username7',email:'email7',telephone:'telephone7',adresse:'adresse7',status:'Actif',adresseEntreprise:'adresse 7'},
      {nom:'nom8',username:'username8',email:'email8',telephone:'telephone8',adresse:'adresse8',status:'Actif',adresseEntreprise:'adresse 8'},
      {nom:'nom9',username:'username9',email:'email9',telephone:'telephone9',adresse:'adresse9',status:'Actif',adresseEntreprise:'adresse 9'},
      {nom:'nom10',username:'username10',email:'email10',telephone:'telephone10',adresse:'adresse10',status:'Actif',adresseEntreprise:'adresse 10'},
      {nom:'nom11',username:'username11',email:'email11',telephone:'telephone11',adresse:'adresse11',status:'Actif',adresseEntreprise:'adresse 11'},
      {nom:'nom12',username:'username12',email:'email12',telephone:'telephone12',adresse:'adresse12',status:'Actif',adresseEntreprise:'adresse 12'},
    ];
        this.dataSource = new MatTableDataSource(this.entreprises);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
  }
  
  bloquer(id: number){
    this.entrepriseService.bloquerPart(id).then(
      (rep)=>{//si la promesse est resulue
        Swal.fire(
          'Erreur',
         // error.error.message,
          'sucess'
        )
      },
      error=>{
         if(error.error.message){
          Swal.fire(
          'Erreur',
          error.error.message,
          'error'
        )
      }
      }
    );
  }
  updateOne(id:number){
    this.id=id;
    this.entrepriseService.getOneEntreprise(id).then(
      rep=>{
        this.entreprise=rep;
        this.initForm();//on initialise le formulaire si la promesse est resolue
        this.update=true;//pour attendre que la promesse soit resolue avant d'afficher le formulaire
      },
      error=>{
        console.log(error);
      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onAdd(){
    this.add=true;
  }
  onSubmit(){
    if(!this.update){
      this.entrepriseService.setEntreprise(this.entrepriseForm.value).then(
        rep=>{
          Swal.fire('Enregistré avec succes','','success')
          console.log(rep);
          this.add=false;
          this.initForm();
          this.entreprise={nom:'',adresse:'',email:'',telephone:'',username:'',adresseEntreprise:'',nomEntreprise:''};
        },
        error=>{
          console.log(error);
        }
      )
    }else{
      this.entrepriseService.updateEntreprise(this.id,this.entrepriseForm.value).then(
        rep=>{
          Swal.fire('Enregistré avec succes','','success')
          console.log(rep);
          this.add=false;
          this.initForm();
          this.entreprise={nom:'',adresse:'',email:'',telephone:'',username:'',adresseEntreprise:'',nomEntreprise:''};
        },
        error=>{
          console.log(error);
        }
      )
    }

    
  }
}
