import { Component, OnInit } from '@angular/core';
import { CardHomeComponent } from '../card-home/card-home.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{



  public constructor(private title: Title){}


  public async ngOnInit(): Promise<void> {
    try {
        this.title.setTitle("Bank | Home")    
       
    } catch (error:any) {
        alert(error.message)
    }
}
}
