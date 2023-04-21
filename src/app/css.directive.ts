import { Directive, ElementRef } from '@angular/core';

// On nomme la directive comme lorsque l'on a tapé la commande dans Angular CLI c'est à a dire le nom de la directive avec le app devant
@Directive({
  selector: '[appCss]'
})
  
export class CssDirective {

  // on défini les valeurs des les éléments que l'on a créer en bas pour l'élement auquel la directive sera attribué
  constructor(private el: ElementRef) {
    this.setBackground('#171717');
    this.setColor('#FFFFFF');
    this.setMargin('1rem 0');
   }

  // on dit que l'on va définir un background donc en string pour la couleur c'est un string
  setBackground(background: string) {
    // donc cet élémeent natif aura comme style background color la valeur de la variable background
    this.el.nativeElement.style.backgroundColor = `${background}`
  }

  setColor(color: string) {
    this.el.nativeElement.style.color = `${color}`
  }

  setMargin(margin: string) {
    this.el.nativeElement.style.margin = `${margin}`
  }
}
