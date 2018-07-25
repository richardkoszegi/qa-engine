import {Component, OnInit} from '@angular/core';

import { Question } from '../../model/question.model';

import { QuestionService } from '../../service/question.service';

/**
 * The home component. Contains the questions that have been asked, if there any.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  /**
   * Local reference to the asked questions.
   */
  questions: Question[];

  /**
   * The constructor.
   * @param {QuestionService} questionService Injected {@link QuestionService}.
   */
  constructor(private questionService: QuestionService) {}

  /**
   * Initializes the local question reference.
   */
  ngOnInit() {
    this.questions = this.questionService.questions;
  }
}
