/**
 * The answer class.
 */
export class Answer {

  /**
   * True, if the Question's author accepted this answer.
   * @type {boolean}
   */
  isCorrect = false;

  /**
   * The constructor.
   * @param {string} author The user's name that made this answer.
   * @param {string} answer The answer's text.
   */
  constructor(public author: string,
              public answer: string) {}
}
