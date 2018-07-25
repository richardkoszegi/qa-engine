import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {NgForm} from '@angular/forms';

import { Question } from '../../model/question.model';
import { Answer } from '../../model/answer.model';

import { UserService } from '../../service/user.service';
import { QuestionService } from '../../service/question.service';

/**
 * The question details component.
 * It displays the answers that have been given to the question and marks with green background the correct ones.
 * The questions owner can mark answers as correct.
 */
@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  /**
   * Local reference to the question, that
   */
  question: Question;

  /**
   * The constructor.
   * @param {QuestionService} questionService Injected {@link QuestionService}.
   * @param {UserService} userService Injected {@link UserService}.
   * @param {ActivatedRoute} route Injected route to gain the id url param.
   */
  constructor(private questionService: QuestionService,
              private userService: UserService,
              private route: ActivatedRoute) {}

  /**
   * Initializes the local question reference by the id given in the url.
   */
  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        const id = +params['id'];
        this.question = this.questionService.questions[id];
      });
  }

  /**
   * Adds the provided answer to the question.
   * @param {NgForm} answerForm The form that contains the new answer's data.
   */
  addAnswer(answerForm: NgForm) {
    const newAnswer = new Answer(
      this.userService.userName,
      answerForm.controls['answer'].value
    );
    this.question.answers.push(newAnswer);
    answerForm.reset();
  }

  /**
   * Checks if the logged in user asked that question.
   * @returns {boolean} Is the user asked the question?
   */
  isUserOwnsThisQuestion(): boolean {
    return this.question.author === this.userService.userName;
  }

  /**
   * Marks the answer with the given index correct.
   * @param {number} index The answers index.
   */
  acceptAnswer(index: number) {
    this.question.answers[index].isCorrect = true;
  }
}
