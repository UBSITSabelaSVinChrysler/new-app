import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from './parts/navi/navi.component';
import { UserInteractionComponent } from './user-interaction/user-interaction.component';

@Component({
  selector: 'app-root',
  imports: [NaviComponent, RouterOutlet,UserInteractionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-app';
}
