const { validateText, validateAnswer } = require("../../validations/question");

class CreateQuestionDTO {
  #text;
  #answer;

  constructor({ text, answer }) {
    validateText(text);
    validateAnswer(answer);

    this.#text = text;
    this.#answer = answer;
  }

  get text() {
    return this.#text;
  }

  get answer() {
    return this.#answer;
  }
}

module.exports = CreateQuestionDTO;
