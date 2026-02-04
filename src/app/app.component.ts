import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from './parts/navi/navi.component';

@Component({
  selector: 'app-root',
  imports: [NaviComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-app';
}
