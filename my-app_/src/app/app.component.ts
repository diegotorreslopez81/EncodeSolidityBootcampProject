import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  submitAnswer() {
  throw new Error('Method not implemented.');
}

  title = 'my-app';
  number = 44;
  score= 0;
  answers: string[] | undefined;
  totalQuestions: number | undefined;
  currentQuestion: number | undefined;
  userAnswer: number | undefined;
  question: number | undefined ;


  constructor() {
    this.currentQuestion = 0;
    this.totalQuestions = 0;
    this.userAnswer = 0;
    this.answers = ["Option 1","Option 2","Option 3","Option 4"];
  }

}
