import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {MatToolbarModule, MatMenuModule, MatButtonModule, MatInputModule, MatCardModule, MatDialogModule} from '@angular/material';

import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {HomeComponent} from './component/home/home.component';
import {NewQuestionComponent} from './component/new-question/new-question.component';
import {QuestionDetailsComponent} from './component/question-details/question-details.component';

import {QuestionService} from './service/question.service';
import {UserService} from './service/user.service';
import {LoginDialogComponent} from './component/login-dialog/login-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/**
 * Routing configuration.
 */
export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'new-question', component: NewQuestionComponent},
  {path: 'question-details/:id', component: QuestionDetailsComponent},
];

/**
 * The bootstrapper module.
 */
@NgModule({
  imports: [BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule],
  declarations: [AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginDialogComponent,
    NewQuestionComponent,
    QuestionDetailsComponent
  ],
  providers: [QuestionService, UserService],
  bootstrap: [AppComponent],
  entryComponents: [LoginDialogComponent]
})
export class AppModule {
}
