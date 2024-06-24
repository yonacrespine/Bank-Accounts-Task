import { Component , Input} from '@angular/core';

import { CommonModule } from '@angular/common';
import { AccountOperationModel } from '../../../models/account-operation.model';

@Component({
  selector: 'app-data-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-card.component.html',
  styleUrl: './data-card.component.css'
})
export class DataCardComponent {

  @Input()
  public operation:AccountOperationModel
  

  public getTime(operation: AccountOperationModel):string{

   const date=  new Date(operation.date)
   const date1= date.toDateString()
    return date1
  }

}
