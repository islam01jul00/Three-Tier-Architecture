const { validateTitle, validateQuestions } = require("../../validations/quiz");

class CreateQuizDTO {
  #title;
  #questions;

  constructor({ title, questions = [] }) {
    validateTitle(title);
    validateQuestions(questions);

    this.#title = title;
    this.#questions = questions;
  }

  get title() {
    return this.#title;
  }

  get questions() {
    return this.#questions;
  }
}

module.exports = CreateQuizDTO;
