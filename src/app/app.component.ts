import { Component, OnInit } from '@angular/core';
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
    console.log(`Vous allez être redirigé vers ${social.media} via ${social.link}`);
    window.open(social.link, '_blank');
  }
}
