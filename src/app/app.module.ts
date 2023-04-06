import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CssDirective } from './css.directive';
import { HomeComponent } from './home/home.component';
import { WritingComponent } from './writing/writing.component';

@NgModule({
  declarations: [
    AppComponent,
    CssDirective,
    HomeComponent,
    WritingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
