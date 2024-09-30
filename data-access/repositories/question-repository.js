const { v4: uuid } = require("uuid");
const { QuestionDTO } = require("../../business-logic/dtos/question");

const questions = {};

class QuestionRepository {
  createQuestion(clientId, quizId, { text, answer }) {
    let clientQuestions = questions[clientId];

    if (!clientQuestions) {
      questions[clientId] = [];
      clientQuestions = questions[clientId];
    }

    const question = { id: uuid(), quizId, text, answer };

    clientQuestions.push(question);

    return new QuestionDTO(question);
  }

  retrieveQuestion(clientId, quizId, questionId) {
    const clientQuestions = questions[clientId];

    return new QuestionDTO(
      clientQuestions.find(
        (question) => question.quizId === quizId && question.id === questionId
      )
    );
  }
}

module.exports = new QuestionRepository();
