import { Question } from '../model/question.model';

/**
 * The Question service. It contains the asked {@link Question}'s.
 */
export class QuestionService {

  /**
   * The asked {@link Question} array.
   * @type {Question[]}
   */
  questions: Question[] = [];
}
