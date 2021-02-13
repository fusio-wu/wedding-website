import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PlayerComponent } from './player/player.component';
import { StoryComponent } from './story/story.component';
import { BestpeopleComponent } from './bestpeople/bestpeople.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    PlayerComponent,
    StoryComponent,
    BestpeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    NoopAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
