class QuestionDTO {
  #quizId;
  #id;
  #text;
  #answer;

  constructor({ id, quizId, text, answer }) {
    this.#quizId = quizId;
    this.#id = id;
    this.#text = text;
    this.#answer = answer;
  }

  get quizId() {
    return this.#quizId;
  }

  get id() {
    return this.#id;
  }

  get text() {
    return this.#text;
  }

  get answer() {
    return this.#answer;
  }

  toJSON() {
    return {
      quizId: this.quizId,
      id: this.id,
      text: this.text,
      answer: this.answer,
    };
  }
}

module.exports = QuestionDTO;
