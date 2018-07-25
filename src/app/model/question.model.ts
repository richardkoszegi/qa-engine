import { Answer } from './answer.model';

/**
 * The Question class. It contains the provided {@link Answer}'s too.
 */
export class Question {

  /**
   * The {@link Answer}s objects that have been provided for this question.
   * @type {any[]}
   */
  answers: Answer[] = [];

  /**
   * The constructor.
   * @param {string} name The question.
   * @param {string} description The question's description.
   * @param {string} author The user's name that asked that question.
   */
  constructor(public name: string,
              public description: string,
              public author: string) {}
}
