import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IntroCardComponent } from './intro-card/intro-card.component';
import { RetroTechLinksComponent } from './retro-tech-links/retro-tech-links.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, IntroCardComponent, RetroTechLinksComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
