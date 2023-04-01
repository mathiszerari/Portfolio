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
  arrowdown: boolean = false;
  arrowleft: boolean = false;
  arrowup: boolean = false;

  @HostListener('document:keydown.arrowright', ['$event'])
  onKeyDownRight(event: KeyboardEvent) {
    this.arrowright = true;
  }
  @HostListener('document:keyup.arrowright', ['$event'])
  onKeyUpRight(event: KeyboardEvent) {
    this.arrowright = false;
  }

  @HostListener('document:keydown.arrowleft', ['$event'])
  onKeyDownLeft(event: KeyboardEvent) {
    this.arrowleft = true;
  }
  @HostListener('document:keyup.arrowleft', ['$event'])
  onKeyUpLeft(event: KeyboardEvent) {
    this.arrowleft = false;
  }

  @HostListener('document:keydown.arrowup', ['$event'])
  onKeyDownup(event: KeyboardEvent) {
    this.arrowup = true;
  }
  @HostListener('document:keyup.arrowup', ['$event'])
  onKeyUpup(event: KeyboardEvent) {
    this.arrowup = false;
  }

  @HostListener('document:keydown.arrowdown', ['$event'])
  onKeyDowndown(event: KeyboardEvent) {
    this.arrowdown = true;
  }
  @HostListener('document:keyup.arrowdown', ['$event'])
  onKeyUpdown(event: KeyboardEvent) {
    this.arrowdown = false;
  }
}
