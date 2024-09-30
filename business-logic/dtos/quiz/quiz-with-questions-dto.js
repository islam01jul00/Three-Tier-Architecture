class QuizWithQuestionsDTO {
  #id;
  #title;
  #questions;

  constructor({ quiz, questions }) {
    this.#id = quiz.id;
    this.#title = quiz.title;
    this.#questions = questions;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get questions() {
    return this.#questions;
  }

  toJSON() {
    return {
      id: this.#id,
      title: this.#title,
      questions: this.questions.map((question) => ({
        id: question.id,
        text: question.text,
        answer: question.answer,
      })),
    };
  }
}

module.exports = QuizWithQuestionsDTO;
