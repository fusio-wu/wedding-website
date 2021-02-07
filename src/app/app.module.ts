import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VimeModule } from '@vime/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PlayerComponent } from './player/player.component';
import { StoryComponent } from './story/story.component';
import { BestpeopleComponent } from './bestpeople/bestpeople.component';

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
    VimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
