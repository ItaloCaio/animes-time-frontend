import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AnimesComponent } from './animes.component';

@NgModule({
  declarations: [
    AnimesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AnimesComponent]
})
export class AnimesModule { }
