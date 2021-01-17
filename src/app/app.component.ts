import {Component, OnInit} from '@angular/core';
import {Questions} from '../assets/mocks/questions';
import {Question} from './models/question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currentStep = 0;
  answered = false;
  selectedAnswer: number;
  questions: Question[];

  ngOnInit(): void {
    this.questions = this.shuffle(Questions);
  }

  onAnswer(answer: string, index: number, event): void {
    if (this.answered) {
      return;
    }
    this.selectedAnswer = index;
    this.answered = true;
  }

  private shuffle(array: Array<any>): Array<any> {
    if (!Array.isArray(array)) {
      throw new TypeError(`Expected an array, got ${typeof array}`);
    }

    array = [...array];

    for (let index = array.length - 1; index > 0; index--) {
      const newIndex = Math.floor(Math.random() * (index + 1));
      [array[index], array[newIndex]] = [array[newIndex], array[index]];
    }

    return array;
  }

  nextQuestion(): void {
    this.answered = false;
    this.currentStep++;
    if (this.currentStep === this.questions.length) {
      this.currentStep = 0;
    }

    const question = this.questions[this.currentStep];

    const ans = question.answers[question.correctAnswer];
    question.answers = this.shuffle(question.answers);
    question.correctAnswer = question.answers.indexOf(ans);
  }
}
