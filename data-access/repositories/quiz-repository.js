const { v4: uuid } = require("uuid");
const { QuizDTO } = require("../../business-logic/dtos/quiz");

const quizzes = {};

class QuizRepository {
  createQuiz(clientId, { title }) {
    let clientQuizzes = quizzes[clientId];

    if (!clientQuizzes) {
      quizzes[clientId] = [];
      clientQuizzes = quizzes[clientId];
    }

    const quiz = { id: uuid(), title };

    clientQuizzes.push(quiz);

    return new QuizDTO(quiz);
  }

  retrieveQuiz(clientId, quizId) {
    const clientQuizzes = quizzes[clientId];

    return new QuizDTO(clientQuizzes.find((quiz) => quiz.id === quizId));
  }
}

module.exports = new QuizRepository();
