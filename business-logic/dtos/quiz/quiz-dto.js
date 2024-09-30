class QuizDTO {
  #id;
  #title;

  constructor({ id, title }) {
    this.#id = id;
    this.#title = title;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
    };
  }
}

module.exports = QuizDTO;
