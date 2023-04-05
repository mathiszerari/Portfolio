import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
  deployed: boolean = false;
  arrowright: boolean = false;
  arrowdown: boolean = false;
  arrowleft: boolean = false;
  arrowup: boolean = false;

  // on set un host listener comme un event listener 
  @HostListener('document:keydown.arrowright', ['$event'])
  onKeyDownRight(event: KeyboardEvent) {
    // on set le boolean arrowright à true
    if (!this.arrowright) {
      this.arrowright = true;
      this.deployed = true;
      console.log('deployed');
    }
    else if (this.arrowright){
      this.arrowright = false;
      this.deployed = false;
      console.log('replied');
    }
  }

  @HostListener('document:keydown.arrowleft', ['$event'])
  onKeyDownLeft(event: KeyboardEvent) {
    if (!this.arrowleft) {
      this.arrowleft = true;
      this.deployed = true;
      console.log('deployed');
    }
    else if (this.arrowleft){
      this.arrowleft = false;
      this.deployed = false;
      console.log('replied');
    }
  }

  @ViewChild('moreButton', { static: true }) moreButton: ElementRef;
}
