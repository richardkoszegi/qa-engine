import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NewQuestionComponent } from './component/new-question/new-question.component';
import { QuestionDetailsComponent } from './component/question-details/question-details.component';

import { QuestionService } from './service/question.service';
import {UserService} from './service/user.service';

/**
 * Routing configuration.
 */
export const appRoutes: Routes = [
  {path: '', component: LoginComponent, },
  {path: 'home', component: HomeComponent, },
  {path: 'new-question', component: NewQuestionComponent, },
  {path: 'question-details/:id', component: QuestionDetailsComponent, },
  ];

/**
 * The bootstrapper module.
 */
@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  RouterModule.forRoot(appRoutes),
                  MatToolbarModule,
                  MatMenuModule,
                  MatButtonModule,
                  MatInputModule,
                  MatCardModule ],
  declarations: [ AppComponent,
                  HeaderComponent,
                  HomeComponent,
                  LoginComponent,
                  NewQuestionComponent ,
                  QuestionDetailsComponent
                ],
  providers:    [ QuestionService, UserService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
