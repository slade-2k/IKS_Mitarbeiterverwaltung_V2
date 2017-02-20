import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MitarbeiterListeComponent } from './components/mitarbeiter-liste/mitarbeiter-liste.component';
import { MitarbeiterService } from './services/mitarbeiter.service';


@NgModule({
  declarations: [
    AppComponent,
    MitarbeiterListeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MitarbeiterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
