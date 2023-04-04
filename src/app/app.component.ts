import { Component, HostListener, OnInit } from '@angular/core';
// on importe la mock 
import { SOCIALMEDIAS } from './mock-social';
// on importe la class social qui définit quel champs aura la mock et le type de données en entrée
import { Social } from './social';

@Component({
  selector: 'app-root',
  // on donne comme template au lieu de l'écrire dans ce fichier le chemin qui mène à notre fichier html
  templateUrl: `app.component.html`
})

// on créer une classe ApppComponent qui estimplémentée à l'initialisation de la page
export class AppComponent {
  // on conne social, un tableau vide
  social: Social[] = SOCIALMEDIAS;

  // ici je crée la condition si l'une des flèches est pressée
  arrowright: boolean = false;
  arrowdown: boolean = false;
  arrowleft: boolean = false;
  arrowup: boolean = false;

  // on set un host listener comme un event listener 
  @HostListener('document:keydown.arrowright', ['$event'])
  onKeyDownRight(event: KeyboardEvent) {
    // on set le boolean arrowright à true
    this.arrowright = true;
  }
  @HostListener('document:keyup.arrowright', ['$event'])
  onKeyUpRight(event: KeyboardEvent) {
    // lorsque l'on relache la touche on set le booleen en false
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
