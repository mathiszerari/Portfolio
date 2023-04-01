import { Component, HostListener, OnInit } from '@angular/core';
import { SOCIALMEDIAS } from './mock-social';
import { Social } from './social';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`
})
export class AppComponent implements OnInit {
  social: Social[] = SOCIALMEDIAS;

  ngOnInit(): void {
    console.table(this.social);
  }

  selectSocial(social: Social) {
    window.open(social.link, '_blank');
  }

  // ici je crée la condition si la flèche de droite est pressée
  arrowright: boolean = false;
  @HostListener('document:keydown.arrowright', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    this.arrowright = true;
  }
  @HostListener('document:keyup.arrowright', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    this.arrowright = false;
  }
}
