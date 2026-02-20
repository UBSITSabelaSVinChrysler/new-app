import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  appTitle: string = 'Welcome to Angular 20';
  userImageUrl: string = 'unnamed.png';
  isHighlighted: boolean = true;
  currentDate: Date = new Date();
} 

