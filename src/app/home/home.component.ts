import { Component } from '@angular/core';
import { SOCIALMEDIAS } from '../mock-social';
import { Social } from '../social';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  social: Social[] = SOCIALMEDIAS;

}
