import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-home',
  standalone: true,
  imports: [],
  templateUrl: './card-home.component.html',
  styleUrl: './card-home.component.css'
})
export class CardHomeComponent {

  @Input() image: string ;
  @Input() title: string ;
  @Input() text: string 
}
