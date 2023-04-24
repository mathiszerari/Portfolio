import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
// on importe la mock 
import { SOCIALMEDIAS } from './mock-social';
// on importe la class social qui définit quel champs aura la mock et le type de données en entrée
import { Social } from './social';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  // on donne comme template au lieu de l'écrire dans ce fichier le chemin qui mène à notre fichier html
  templateUrl: `app.component.html`
})

// on créer une classe ApppComponent qui estimplémentée à l'initialisation de la page
export class AppComponent {
  // on conne social, un tableau vide
  social: Social[] = SOCIALMEDIAS;
  constructor(private router: Router) { }
  

  // ici je crée la condition si l'une des flèches est pressée
  deployed: boolean = false;
  arrowright: boolean = false;
  arrowdown: boolean = false;
  arrowleft: boolean = false;
  arrowup: boolean = false;
  keyesc: boolean = false;
  keyenter: boolean = false;
  un: boolean = false;
  deux: boolean = false;
  trois: boolean = false;
  active: boolean = false;
  light: boolean = false;
  night: boolean = true;
  clicked: boolean = false;
  lightmode: boolean = false;
  

  rootElement = document.documentElement;

  ngOnInit() {
    this.rootElement.classList.add('dark');
  }


  @ViewChild('navbar', { static: true }) navbar: ElementRef;
  @ViewChild('html', { static: true }) html: ElementRef;
  @ViewChild('more', { static: false }) more: ElementRef;

  // on set un host listener comme un event listener 
  @HostListener('document:keydown.arrowright', ['$event'])
  onKeyDownRight(event: KeyboardEvent) {
    // on set le boolean arrowright à true
    if (!this.arrowright) {
      this.arrowright = true;
      this.un = true;
      this.keyesc = false;
      this.active = true;
    }
    else if (this.arrowright && this.un) {
      // this.arrowright = false;
      this.un = false;
      this.deux = true;
      this.trois = false;
      this.keyesc = false;
    }
    else if (this.arrowright && this.deux) {
      // this.arrowright = false;
      this.un = false;
      this.deux = false;
      this.trois = true;
      this.keyesc = false;
    }
    else if (this.arrowright && this.trois) {
      // this.arrowright = false;
      this.un = false;
      this.deux = false;
      this.trois = true;
      this.keyesc = false;
    }
  }

  @HostListener('document:keydown.arrowleft', ['$event'])
  onKeyDownLeft(event: KeyboardEvent) {
    if (!this.arrowleft) {
      this.arrowleft = true;
    }
    else if (this.arrowleft && this.un) {
      this.active = true;
      this.arrowleft = false;
      this.arrowright = false;
      this.un = false;
      this.deux = false;
      this.keyesc = false;
      this.active = false;
    }
    else if (this.arrowleft && this.deux) {
      // this.arrowleft = false;
      this.un = true;
      this.deux = false;
      this.trois = false;
      this.keyesc = false;
    }
    else if (this.arrowleft && this.trois) {
      // this.arrowleft = false;
      this.un = false;
      this.deux = true;
      this.trois = false;
      this.keyesc = false;
    }
  }

  @HostListener('document:keydown.esc', ['$event'])
  onKeyDownEsc(event: KeyboardEvent) {
    if (!this.keyesc) {
      this.keyesc = true;
      this.arrowright = false;
      this.un = false;
      this.deux = false;
      this.trois = false;
    }
    else if (this.keyesc){
      this.keyesc = false;
    }
  }
  @HostListener('document:keydown.enter', ['$event'])
  onKeyDownEnter(event: KeyboardEvent) {
    if (!this.keyenter) {
      this.keyenter = true;
      if (this.un) {
        this.router.navigateByUrl('/home');
        this.keyenter = false;
        this.active = false;
        this.un = false;
      }
      if (this.trois) {
        this.router.navigateByUrl('/writing');
        this.keyenter = false;
        this.active = false;
        this.trois = false;
      }
    }
  }
  moreButtons() { 
    if (!this.clicked) {
      console.log('Le bouton a été cliqué !');
      this.un = true;
      this.keyesc = false;
      this.active = true;
      this.clicked = true;
    } else {
      this.active = true;
      this.arrowleft = false;
      this.arrowright = false;
      this.un = false;
      this.deux = false;
      this.keyesc = false;
      this.active = false;
      this.clicked = false;
    }
  }

  lightMode() {
    console.log('light mode on')
    this.light = true;
    this.night = false;
    this.rootElement.classList.add('light');
    this.rootElement.classList.remove('dark');
  }
  
  nightMode() {
    console.log('night mode on')
    this.light = false;
    this.night = true;
    this.rootElement.classList.remove('light');
    this.rootElement.classList.add('dark');
  }
}
