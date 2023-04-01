import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCss]'
})
export class CssDirective {

  constructor(private el: ElementRef) {
    this.setBackground('#171717');
    this.setColor('#FFFFFF');
    this.setMargin('6rem 0');
   }

  setBackground(background: string) {
    this.el.nativeElement.style.backgroundColor = `${background}`
  }

  setColor(color: string) {
    this.el.nativeElement.style.color = `${color}`
  }

  setMargin(margin: string) {
    this.el.nativeElement.style.margin = `${margin}`
  }
}
