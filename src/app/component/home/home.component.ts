import {Component, OnInit} from '@angular/core';

import {Question} from '../../model/question.model';

import {QuestionService} from '../../service/question.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {UserService} from '../../service/user.service';
import {LoginDialogComponent} from '../login-dialog/login-dialog.component';

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


  constructor(private questionService: QuestionService,
              private dialog: MatDialog,
              private userService: UserService) {
  }

  /**
   * Initializes the local question reference.
   */
  ngOnInit() {
    this.questions = this.questionService.questions;
    setTimeout(() => {
      if (!this.userService.isUserLoggedIn()) {
        this.openDialog();
      }
    });
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(LoginDialogComponent, dialogConfig);
  }
}
