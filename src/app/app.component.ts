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
    this.selectSocial(this.social[0]);
  }

  selectSocial(social: Social) {
    console.log(`Vous allez être redirigé vers : ${social.media}`);
  }
}
