import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { QuizcontainerDirective } from './quizhome/quizhome.component';
import { QuizresultComponent } from './quizresult/quizresult.component';
import { QuizhomeComponent } from './quizhome/quizhome.component';
import { QuizexpandComponent } from './quizexpand/quizexpand.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizhomeComponent,
    QuizcontainerDirective,
    QuizexpandComponent,
    QuizresultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    QuizexpandComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
