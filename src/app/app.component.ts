import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
  keyesc: boolean = false;
  un: boolean = false;
  deux: boolean = false;
  trois: boolean = false;

  @ViewChild('navbar', { static: true }) navbar: ElementRef;
  @ViewChild('morebtn', { static: true }) morebtn: ElementRef;
  @ViewChild('homebtn', { static: true }) homebtn: ElementRef;
  @ViewChild('darkbtn', { static: true }) darkbtn: ElementRef;
  @ViewChild('plumebtn', { static: true }) plumebtn: ElementRef;

  // on set un host listener comme un event listener 
  @HostListener('document:keydown.arrowright', ['$event'])
  onKeyDownRight(event: KeyboardEvent) {
    // on set le boolean arrowright à true
    if (!this.arrowright) {
      this.arrowright = true;
      this.un = true;
      
    }
    else if (this.arrowright && this.un) {
      // this.arrowright = false;
      this.un = false;
      this.deux = true;
    }
    else if (this.arrowright && this.deux) {
      // this.arrowright = false;
      this.un = false;
      this.deux = false;
      this.trois = true;
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

  @HostListener('document:keydown.esc', ['$event'])
  onKeyDownEsc(event: KeyboardEvent) {
    if (!this.keyesc) {
      this.keyesc = true;
      console.log('esc');
      
    }
    else if (this.keyesc){
      this.keyesc = false;
      console.log('esc no more');
    }
  }
}
