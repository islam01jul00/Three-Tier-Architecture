const validator = require("validator");
const { ValidationError, NotFoundError } = require("../errors/common");
const {
  clientRepository,
  quizRepository,
} = require("../../data-access/repositories");

class MissingClientError extends Error {}
class MissingQuizError extends Error {}

class Context {
  #client;
  #quiz;

  constructor() {
    this.#client = null;
    this.#quiz = null;
  }

  ensureClient(clientId) {
    if (!this.#client) {
      if (!validator.isUUID(clientId)) {
        throw new ValidationError(
          "Invalid client id, it must be a valid UUID."
        );
      }

      const client = clientRepository.retrieveClient(clientId);

      if (!client) {
        throw new NotFoundError(`There is no client with this id ${clientId}`);
      }

      this.#client = client;
    }

    return this;
  }

  ensureQuiz(quizId) {
    if (!this.#quiz) {
      if (!validator.isUUID(quizId)) {
        throw new ValidationError("Invalid quiz id, it must be a valid UUID.");
      }

      if (!this.#client) {
        throw new MissingClientError(
          "Client must be set before setting a quiz."
        );
      }

      const quiz = quizRepository.retrieveQuiz(this.#client.id, quizId);

      if (!quiz) {
        throw new NotFoundError(
          `There is no quiz with this id ${quizId} for client ${
            this.#client.id
          }`
        );
      }

      this.#quiz = quiz;
    }

    return this;
  }

  get client() {
    if (!this.#client) {
      throw new MissingClientError("Client has not been set.");
    }

    return this.#client;
  }

  get quiz() {
    if (!this.#quiz) {
      throw new MissingQuizError("Quiz has not been set.");
    }

    return this.#quiz;
  }
}

module.exports = Context;
