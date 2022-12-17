import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  number = 44;
  score= 0;
  answers: number | undefined;
  totalQuestions: number | undefined;
  currentQuestion: number | undefined;
  userAnswer: number | undefined;
  question: number | undefined ;

}
