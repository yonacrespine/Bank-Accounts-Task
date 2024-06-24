import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { DataService } from '../../../services/data.service';
import { DataCardComponent } from '../data-card/data-card.component';
import { Title } from '@angular/platform-browser';
import { AccountOperationModel } from '../../../models/account-operation.model';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [CommonModule, FormsModule, DataCardComponent],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css'
})
export class DataListComponent implements OnInit {

  public accountNumber: number
  public operations:AccountOperationModel[]
 

  public constructor(private dataService: DataService, private title:Title){}


  public async ngOnInit(): Promise<void> {
    try {
        this.title.setTitle("Bank | Operations")    
       
    } catch (error:any) {
        alert(error.message)
    }
}




public async search(){

  try{

    if(!this.accountNumber) {
   
      this.operations = null
      return
     
  }
   this.operations= await this.dataService.getAllAccount(this.accountNumber)
   this.accountNumber = null; 
  }
  catch(error:any){
alert(error.message)
  }
}


}
