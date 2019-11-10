import { EntrepriseService } from './../../services/entreprise.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.scss']
})
export class ListeUsersComponent implements OnInit {
  add=false;
  users:User[]=[]
  displayedColumns: string[] = ['nom', 'email', 'telephone', 'status', 'Modifier'];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private entrepriseService:EntrepriseService) { }

  ngOnInit() {
    this.fgetUsers();
  }
  getUsers(){
    this.entrepriseService.getUsers().then(
      users=>{
        this.users=users;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error=>{
        console.log(error);
      }
    )
  }
  fgetUsers(){
    this.users=[
      {nom:'nom1',username:'username1',email:'email1',telephone:'telephone1',adresse:'adresse1',status:'Actif'},
      {nom:'nom2',username:'username2',email:'email2',telephone:'telephone2',adresse:'adresse2',status:'Actif'},
      {nom:'nom3',username:'username3',email:'email3',telephone:'telephone3',adresse:'adresse3',status:'Actif'},
      {nom:'nom4',username:'username4',email:'email4',telephone:'telephone4',adresse:'adresse4',status:'Actif'},
      {nom:'nom5',username:'username5',email:'email5',telephone:'telephone5',adresse:'adresse5',status:'Actif'},
      {nom:'nom6',username:'username6',email:'email6',telephone:'telephone6',adresse:'adresse6',status:'Actif'},
      {nom:'nom7',username:'username7',email:'email7',telephone:'telephone7',adresse:'adresse7',status:'Actif'},
      {nom:'nom8',username:'username8',email:'email8',telephone:'telephone8',adresse:'adresse8',status:'Actif'},
      {nom:'nom9',username:'username9',email:'email9',telephone:'telephone9',adresse:'adresse9',status:'Actif'},
      {nom:'nom10',username:'username10',email:'email10',telephone:'telephone10',adresse:'adresse10',status:'Actif'},
      {nom:'nom11',username:'username11',email:'email11',telephone:'telephone11',adresse:'adresse11',status:'Actif'},
      {nom:'nom12',username:'username12',email:'email12',telephone:'telephone12',adresse:'adresse12',status:'Actif'},
    ];
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
  }
  updateUser(id:number){
    //this.router.navigate(['update',id]);
  }
  bloquer(id: number){
    /*this.entrepriseService.bloquerUser(id).then(
      (rep)=>{//si la promesse est resulue
        this.entrepriseService.getUsers();
          Swal.fire(
            rep.message,'',
            'success'
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
    );*/
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
}
