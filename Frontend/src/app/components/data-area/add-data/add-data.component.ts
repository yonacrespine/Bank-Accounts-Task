import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';
import { AccountOperationModel } from '../../../models/account-operation.model';

@Component({
  selector: 'app-add-data',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-data.component.html',
  styleUrl: './add-data.component.css'
})
export class AddDataComponent implements OnInit {

  public operation= new AccountOperationModel()

  


public constructor(private title: Title, private dataService:DataService ,  private router: Router,){}


  public async ngOnInit(): Promise<void> {
    try {
        this.title.setTitle("Bank | Add Operations")    
       
    } catch (error:any) {
        alert(error.message)
    }
}


public async submit(form: NgForm):Promise<void>{
  try{

    if(form.valid){
     await this.dataService.addAccount(this.operation)
   
     this.router.navigateByUrl("list")
    }
  }
  catch(error:any){
    alert(error.message)
  }
}


}
