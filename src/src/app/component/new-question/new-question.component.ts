import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Question } from '../../model/question.model';

import { UserService } from '../../service/user.service';
import { QuestionService } from '../../service/question.service';

/**
 * The new question component. Here users can create new questions.
 */
@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent {

  /**
   * The constructor.
   * @param {QuestionService} questionService Injected {@link QuestionService}.
   * @param {UserService} userService Injected {@link UserService}.
   * @param {Router} router Injected router service.
   */
  constructor(private questionService: QuestionService,
              private userService: UserService,
              private router: Router) {}

  /**
   * Creates a new {@link Question} object, then adds it to the {@link questionService}'s question list.
   * After that it navigates to the home page.
   * @param {string} name The new question's name.
   * @param {string} details The new question's details.
   */
  addQuestion(name: string, details: string) {
    const newQuestion = new Question(name, details,
                                     this.userService.userName);
    this.questionService.questions.push(newQuestion);
    this.router.navigate(['/home']);
  }
}
