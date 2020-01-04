import { Component, OnInit } from '@angular/core';
import { FormserviceService} from 'src/app/services/formservice.service';
import Swal from 'sweetalert2'  

@Component({
  selector: 'app-formtransfert',
  templateUrl: './formtransfert.component.html',
  styleUrls: ['./formtransfert.component.scss']
})
export class FormtransfertComponent implements OnInit {

  constructor(private formserviceservice: FormserviceService) { }

  ngOnInit() {
  }

  onSubmit(data) {
    this.formserviceservice.Formvente(data)
    .subscribe(
      data => {console.log(data)
        Swal.fire(data.message)},
      error =>{console.log(data)
      }
    
     
    )
  }
}
