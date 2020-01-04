import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss']
})
export class AddProduitComponent implements OnInit {
  ValidationMsg = {
    'nom': [
      { type: 'required', message: 'Le nom est obligatoire' },
      { type: 'minlength', message: 'Vous devez remplir au moins 2 caracteres' },
      { type: 'pattern', message: 'Rentrer un nom valide' }
    ],
    'quantite': [
      { type: 'required', message: 'La quantite est obligatoire' },
    ],
    'categorie': [
      { type: 'required', message: 'La categorie est obligatoire' },
    ],
    'prix': [
      { type: 'required', message: 'Le prix obligatoire' }
    ]
  }
  private addForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.addForm=this.formBuilder.group({   
      nom:['',[Validators.required]],
      quantite:['',[Validators.required]],
      categorie:[''],
      prix:['']
    });
  }
  onSubmit(){
    console.log(this.addForm.value);   
  }
  

}
